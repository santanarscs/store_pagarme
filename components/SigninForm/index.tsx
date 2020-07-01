import React, { useCallback, useState } from 'react'
import { useAuth } from '../../hooks/auth'
import Router from 'next/router'
import { Container } from './styles'

interface FormData {
  email: string;
  password: string;
}

const SigninForm: React.FC = () => {
  const  [formData, setFormData] = useState<FormData>({} as FormData)
  const {user, signIn } = useAuth();

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if(formData.email && formData.password){
      signIn(formData)
      Router.push('/')
    }
  },[signIn, formData])
  return (
    <Container>
      <h1>Autenticação</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input autoComplete="none" type="email" placeholder="Seu e-mail" onChange={e => setFormData({...formData, email: e.target.value})}/>
        <label htmlFor="password">Senha</label>
        <input type="password" placeholder="Sua senha" onChange={e => setFormData({...formData, password: e.target.value})}/>
        <button type="submit">Entrar</button>
      </form>
    </Container>
  )
}

export default SigninForm;