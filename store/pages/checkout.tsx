import React, { useState, useMemo, useCallback } from 'react'
import pagarme from 'pagarme'
import Cards from 'react-credit-cards';
import { formatPrice } from '../util/formatPrice';
import { useCart } from '../hooks/cart'
import api from '../service/api'
import Router from 'next/router'
import formData from '../data'

import { Container, CartList, Select,SumaryContainer, PaymentContainer, Button } from '../styles/checkout'

const Checkout: React.FC = () => {
  const { items, total, addToCart, removeFromCart } = useCart();
  const [shippingValue, setShippingValue] = useState<number>(0)
  const [paymentValue, setPaymentValue] = useState<number>(0)

  const [card, setCard] = useState({
    card_holder_name: '',
    card_number: '',
    card_expiration_date: '',
    card_cvv: '',
    id: '',
  });

  const itemsFormatted = useMemo(() => {
    return items.map(item => ({
      ...item,
      priceFormatted: formatPrice(Number(item.price * item.quantity))
    }))
  },[items])

  const subTotal = useMemo(() => {
    return formatPrice(total)
  },[total])
  
  const totalOrder = useMemo(() => {
    return formatPrice(total + shippingValue);
  }, [subTotal, shippingValue])

  function handleChangeCard(e) {
    const { name, value } = e.target;
    setCard({ ...card, [name]: value, id: '' });
  }

  const handleSubmit = useCallback(async () => {
    try {
      const client = await pagarme.client.connect({
        encryption_key: 'ek_test_gJE3PjsAlpbYgjTTaXaNUbbZT3vCbE'
      })
      const cardData = await client.security.encrypt(card);
      await api.post('checkouts', {
        ...formData,
        items,
        amount: total + shippingValue,
        card_hash: cardData
      })
      Router.push("/")
    } catch(e) {
      alert('problema ao tentar registrar pedido, tente novamente')
    }
  }, [])

  return (
    <Container >
      <h1>Checktou</h1>
      <CartList>
        {itemsFormatted.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong><small>({item.priceFormatted})</small>
            <div>
             <button type="button" onClick={() => addToCart(item.id)}>+</button>
             <span>{item.quantity}</span>
             <button type="button" onClick={() => removeFromCart(item.id)}>-</button>
           </div>
            <p>{item.description}</p>
          </li>
        ))}
      </CartList>
      <Select name="shippingType" id="shippingType" value={shippingValue} onChange={(e) => setShippingValue(Number(e.target.value))}>
        <option value="0">Buscar na loja</option>
        <option value="10">Guará</option>
        <option value="20">Taguatinga</option>
        <option value="100">Vicente Pires</option>
      </Select>
      <SumaryContainer>
        <h3>Subtotal: {subTotal}</h3>
        <h4>Frete: {formatPrice(shippingValue)} </h4>
        <h4>Total: {totalOrder} </h4>
      </SumaryContainer>
      <h1>Informações de pagamento</h1>
      <Select name="paymentType" id="paymentType" onChange={(e) => setPaymentValue(Number(e.target.value))}>
        <option value="1">Transferência Bancária</option>
        <option value="2">Cartão de débito</option>
        <option value="3">Cartão de Crédito</option>
      </Select>
      <PaymentContainer>
        {paymentValue === 3 && (
          <>
            <div className="form-area">
            <label htmlFor="card_holder_name">Nome Completo</label>
            <input
              id="card_holder_name"
              name="card_holder_name"
              type="text"
              onChange={handleChangeCard}
            />
            <label htmlFor="card_number">Número do cartão</label>
            <input
              id="card_number"
              name="card_number"
              type="text"
              onChange={handleChangeCard}
            />
            <div className="group">
              <div>
                <label htmlFor="card_expiration_date">Vencimento</label>
                <input
                  id="card_expiration_date"
                  name="card_expiration_date"
                  type="text"
                  onChange={handleChangeCard}
                />
              </div>
              <div>
              <label htmlFor="card_cvv">CVC</label>
                <input
                  id="card_cvv"
                  name="card_cvv"
                  type="text"
                  onChange={handleChangeCard}
                />
              </div>
            </div>
          </div>
          <div className="credit-card">
            <Cards
              number={card.card_number}
              name={card.card_holder_name}
              expiry={card.card_expiration_date}
              cvc={card.card_cvv}
              focused="number"
            />
          </div>
          </>
        )}
      </PaymentContainer>
      <Button type="button" onClick={handleSubmit}>FINALIZAR PAGAMENTO</Button>
    </Container>
  )
}

export default Checkout;
// card number = 5252893142325275