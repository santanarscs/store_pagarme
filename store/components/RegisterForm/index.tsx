import React, { useCallback, useState } from 'react'
import Router from 'next/router'
import { Container } from './styles'
import Link from 'next/link'
import api from '../../service/api'

interface FormData {
  name: string;
  email: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const  [formData, setFormData] = useState<FormData>({} as FormData)

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if(formData.name && formData.email && formData.password){
      api.post('/users', formData).then(() => {
        Router.push('/')
      })
    }
  },[formData])
  return (
    <Container>
      <h1>Criar conta</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">Nome Completo</label>
        <input autoComplete="none" type="text" placeholder="Seu nome" onChange={e => setFormData({...formData, name: e.target.value})}/>
        <label htmlFor="email">E-mail</label>
        <input autoComplete="none" type="email" placeholder="Seu e-mail" onChange={e => setFormData({...formData, email: e.target.value})}/>
        <label htmlFor="password">Senha</label>
        <input type="password" placeholder="Sua senha" onChange={e => setFormData({...formData, password: e.target.value})}/>
        <button type="submit">Criar conta</button>
      </form>
    </Container>
  )
}

export default RegisterForm;