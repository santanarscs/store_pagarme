import React, { useState, useMemo, useCallback } from 'react'
import pagarme from 'pagarme'
import Cards from 'react-credit-cards';
import { formatPrice } from '../util/formatPrice';
import { useCart } from '../hooks/cart'
import api from '../service/api'


const Checkout: React.FC = () => {
  const { items, total, addToCart, removeFromCart } = useCart();
  const [shippingValue, setShippingValue] = useState<number>(0)
  const [paymentValue, setPaymentValue] = useState<number>(0)

  const [card, setCard] = useState({
    holder_name: '',
    number: '',
    expiration_date: '',
    cvv: '',
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
    return formatPrice(total);
  }, [subTotal, shippingValue])

  /**
   * listar os produtos da compra 
   * calcular frete / entrega
   * calcular total 
   * fechar pedido
   */
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
        cardData
      })
    } catch(e) {
      console.log(e)
    }
  }, [])

  return (
    <div style={{maxWidth: "900px", margin: "0 auto"}}>
      <h1>Checktou</h1>
      <ul>
        {itemsFormatted.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong><small>({item.priceFormatted})</small>
            <div>
             <button type="button" onClick={() => addToCart(item.id)}>+</button>
             {item.quantity}
             <button type="button" onClick={() => removeFromCart(item.id)}>-</button>
           </div>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <select name="shippingType" id="shippingType" onChange={(e) => setShippingValue(Number(e.target.value))}>
        <option value="0">Buscar na loja</option>
        <option value="10">Guará</option>
        <option value="20">Taguatinga</option>
        <option value="100">Vicente Pires</option>
      </select>
      <h3>Subtotal: {subTotal}</h3>
      <h4>Frete: {formatPrice(shippingValue)} </h4>
      <h4>Total: {totalOrder} </h4>
      <hr/>
      <h1>Informações de pagamento</h1>
      <select name="paymentType" id="paymentType" onChange={(e) => setPaymentValue(Number(e.target.value))}>
        <option value="1">Transferência Bancária</option>
        <option value="2">Cartão de débito</option>
        <option value="3">Cartão de Crédito</option>
      </select>
      <hr/>
      <div>
        {paymentValue === 3 && (
          <>
            <div className="form-area">
            <label htmlFor="holder_name">Nome Completo</label>
            <input
              id="holder_name"
              name="holder_name"
              type="text"
              onChange={handleChangeCard}
            />
            <label htmlFor="number">Número do cartão</label>
            <input
              id="number"
              name="number"
              type="text"
              onChange={handleChangeCard}
            />
            <div className="group">
              <div>
                <label htmlFor="expiration_date">Vencimento</label>
                <input
                  id="expiration_date"
                  name="expiration_date"
                  type="text"
                  onChange={handleChangeCard}
                />
              </div>
              <div>
              <label htmlFor="cvv">CVV</label>
                <input
                  id="cvv"
                  name="cvv"
                  type="text"
                  onChange={handleChangeCard}
                />
              </div>
            </div>
          </div>
          <div className="credit-card">
            <Cards
              number={card.number}
              name={card.holder_name}
              expiry={card.expiration_date}
              cvc={card.cvv}
              focused="number"
            />
          </div>
          </>
        )}
      </div>
      <button type="button" onClick={handleSubmit}>FINALIZAR PAGAMENTO</button>
    </div>
  )
}

export default Checkout;