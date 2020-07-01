import React from 'react'
import { Container, Row, InputGroup } from '../styles/profile'
import { useAuth } from '../hooks/auth'
const Profile: React.FC = () => {
  const { user } = useAuth()
  return (
    <Container>
      <h1>Olá, {user?.name}</h1>
      <form>
        <fieldset>
          <h3>Dados Gerais</h3>
          <Row>
            <InputGroup style={{marginRight: 20}}>
              <label htmlFor="name">Nome Completo</label>
              <input type="text" name="name" placeholder="Seu nome completo"/>
            </InputGroup>
            <InputGroup>
              <label htmlFor="phone">Telefone</label>
              <input type="text" name="phone" placeholder="Seu telefone"/>
            </InputGroup>
          </Row>
          <Row>
            <InputGroup style={{marginRight: 20}}>
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" placeholder="Seu e-mail"/>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input type="text" name="cpf" placeholder="Seu CPF"/>
            </InputGroup>
          </Row>
        </fieldset>
        <fieldset>
          <h3>Endereço</h3>
          <Row>
            <InputGroup style={{marginRight: 20}}>
              <label htmlFor="zipcode">CEP</label>
              <input type="text" name="zipcode" placeholder="Seu CEP"/>
            </InputGroup>
            <InputGroup style={{marginRight: 20}}>
              <label htmlFor="street">Rua</label>
              <input type="text" name="street" placeholder="Rua ex."/>
            </InputGroup>
            <InputGroup>
              <label htmlFor="street_number">Número</label>
              <input type="text" name="street_number" placeholder="Número"/>
            </InputGroup>
          </Row>
          <Row>
            <InputGroup>
              <label htmlFor="neighborhood">Bairro</label>
              <input type="text" name="neighborhood" placeholder="Bairro"/>
            </InputGroup>
          </Row>
          <Row>
            <InputGroup style={{marginRight: 20}}>
              <label htmlFor="city">Cidade</label>
              <input type="text" name="city" placeholder="Cidade"/>
            </InputGroup>
            <InputGroup>
              <label htmlFor="state">Estado</label>
              <input type="text" name="state" placeholder="Estado"/>
            </InputGroup>
          </Row>
        </fieldset>
        <button type="submit">Atualizar</button>
      </form>
    </Container>
  )
}

export default Profile