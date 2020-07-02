import pagarme from 'pagarme';
import { getRepository } from 'typeorm';
import Checkout from '../models/Checkout';
import Transaction from '../models/Transaction';
import Product from '../models/Product';

interface Request {
  address: any;
  customer: any;
  card_hash: string;
  items: any[];
  amount: number;
  installments: number;
}

class CreateCheckoutService {
  public async execute({
    address,
    customer,
    card_hash,
    items,
    installments,
    amount: amountClient,
  }: Request): Promise<void> {
    // gerar o total do carrinho pelo backend
    const client = await pagarme.client.connect({
      api_key: 'ak_test_hUs73zp5czhh7A36pyOJ9FjN98MRNZ',
    });
    // frete
    const fee = 1000;
    const amount = amountClient * 100 + fee;
    const pagarmeTransaction = await client.transactions.create({
      amount,
      card_hash,
      customer: {
        name: customer.name,
        email: customer.email,
        country: 'br',
        external_id: '1',
        type: 'individual',
        documents: [
          {
            type: 'cpf',
            number: customer.cpf,
          },
          {
            type: 'rg',
            number: customer.rg,
          },
        ],
        phone_numbers: [customer.phone],
      },
      billing: {
        name: customer.name,
        address: {
          ...address,
          country: 'br',
        },
      },
      shipping: {
        name: customer.name,
        fee,
        delivery_date: '2019-07-21',
        expedited: false,
        address: {
          ...address,
          country: 'br',
        },
      },
      items: items.map(item => ({
        id: item.id,
        title: item.name,
        unit_price: item.price * 100,
        quantity: item.quantity,
        tangible: true,
      })),
    });

    // checkout tera o valor + os items do pedido (order)
    // relacionamento de checkout com produtos é de muitos para muitos
    const checkoutsRepository = getRepository(Checkout);
    // save products
    const productsRepository = getRepository(Product);
    const productsId = items.map(item => item.id);
    const products = await productsRepository.findByIds(productsId);
    const checkout = checkoutsRepository.create({
      // amount: parseInt(amount * 100, 10)
      amount: amount * 100,
      fee,
      products,
    });
    await checkoutsRepository.save(checkout);

    // salvando a transação que é retornada pelo pagar.me
    const transactionsRepository = getRepository(Transaction);
    const transaction = transactionsRepository.create({
      checkout,
      transaction_id: pagarmeTransaction.id,
      status: pagarmeTransaction.status,
      authorization_code: pagarmeTransaction.authorization_code,
      brand: pagarmeTransaction.card.brand,
      authorized_amount: pagarmeTransaction.authorized_amount,
      tid: pagarmeTransaction.tid,
      // parcelamento
      installments,
    });
    await transactionsRepository.save(transaction);

    // return transaction;
  }
}

export default CreateCheckoutService;
