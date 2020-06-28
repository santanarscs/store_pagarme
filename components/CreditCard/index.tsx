import React, { useState, useEffect } from 'react'
import api from '../../service/api'

interface Props {
  onChange: (card: string) => void
}
const CreditCard: React.FC<Props> = ({onChange}) => {
  const [cards, setCards] = useState([])
  useEffect(() => {
    api.get('cards').then(response => setCards(response.data))
  },[])
   
  const handleChange = (card) => {
    onChange(card)
  }

  return (
    <h1>Teste</h1>
  )
}
export default CreditCard;