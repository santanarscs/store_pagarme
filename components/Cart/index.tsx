import React, { useMemo } from 'react'
import { formatPrice } from "../../util/formatPrice";
import { useCart } from '../../hooks/cart'
import Link from 'next/link'


const Cart: React.FC = () => {
  const { items, addToCart, removeFromCart } = useCart();
  const itemsFormatted = useMemo(() => {
    return items.map(item => ({
      ...item,
      priceFormatted: formatPrice(Number(item.price * item.quantity))
    }))
  },[items])
  return (
    <div>
      <h2>Seu pedido:</h2>
      <ul>
        {itemsFormatted.map(item => (
          <li key={item.id}>
           <div>
             <strong>{item.name}</strong> {item.priceFormatted}
           </div>
           <div>
             <button type="button" onClick={() => addToCart(item.id)}>+</button>
             {item.quantity}
             <button type="button" onClick={() => removeFromCart(item.id)}>-</button>
           </div>
          </li>
        ))}
      </ul>
      <Link href="/checkout">
        <a>Finalizr compra</a>
      </Link>
    </div>
  )
}

export default Cart;