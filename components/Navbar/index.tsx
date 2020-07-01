import React from 'react'
import Link from 'next/link'
import { useAuth } from '../../hooks/auth'
import { Container, Content } from './styles'

const Navbar: React.FC = () => {
  const { user, signOut } = useAuth()
  return (
    <Container>
      <Content>
        <Link href="/">
          <a >
            Meu e-commerce
          </a>
        </Link>
        <div>
          {!!user ? (
          <>
            <button onClick={signOut}>
              Logout
            </button>
            <Link href="/profile">
              <a>Meus Dados</a>
            </Link>
          </>
          ) :(
          <Link href="/signin">
            <a>Login</a>
          </Link>
          )}
          
        </div>
      </Content>
    </Container>
  )
}
export default Navbar;