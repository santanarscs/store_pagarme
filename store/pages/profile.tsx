import React, {useEffect, useRef, useCallback} from 'react'
import {Form } from '@unform/web'
import { SubmitHandler, FormHandles, Scope } from '@unform/core'
import { Container, Row, InputGroup } from '../styles/profile'
import Input from '../components/Form/Input'
import { useAuth } from '../hooks/auth'


interface FormData {
  name: string,
  email: string,
  
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit: SubmitHandler<FormData> = useCallback(async (data) => {
    console.log(data)
  }, [])
  const { user } = useAuth()
  return (
    <Container>
      <h1>Olá, {user?.name}</h1>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={user}>
        <fieldset>
          <h3>Dados Gerais</h3>
          <Row>
            <InputGroup style={{marginRight: 20}}>
              <Input label="Nome Completo" type="text" name="name" placeholder="Seu nome completo"/>
            </InputGroup>
            <InputGroup>
              <Input label="Telefone" type="text" name="phone" placeholder="Seu telefone"/>
            </InputGroup>
          </Row>
          <Row>
            <InputGroup style={{marginRight: 20}}>
               <Input label="E-mail" type="email" name="email" placeholder="Seu e-mail"/>
            </InputGroup>
            <InputGroup>
              <Input label="CPF" type="text" name="cpf" placeholder="Seu CPF"/>
            </InputGroup>
          </Row>
        </fieldset>
        <fieldset>
          <h3>Endereço</h3>
          <Scope path="address">
            <Row>
              <InputGroup style={{marginRight: 20}}>
                <Input label="CEP" type="text" name="zipcode" placeholder="Seu CEP"/>
              </InputGroup>
              <InputGroup style={{marginRight: 20}}>
                <Input label="Rua" type="text" name="street" placeholder="Rua ex."/>
              </InputGroup>
              <InputGroup>
                <Input label="Número" type="text" name="street_number" placeholder="Número"/>
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <Input label="bairro" type="text" name="neighborhood" placeholder="Bairro"/>
              </InputGroup>
            </Row>
            <Row>
              <InputGroup style={{marginRight: 20}}>
                <Input label="Cidade" type="text" name="city" placeholder="Cidade"/>
              </InputGroup>
              <InputGroup>
                <Input label="Estado" type="text" name="state" placeholder="Estado"/>
              </InputGroup>
            </Row>
          </Scope>
        </fieldset>
        <button type="submit">Atualizar</button>
      </Form>
    </Container>
  )
}

export default Profile