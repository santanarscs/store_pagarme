import React from 'react'
import Link from 'next/link'
import { Container, Content } from './styles'

const Navbar: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link href="/">
          <a >
            Meu e-commerce
          </a>
        </Link>
        <div>
          <Link href="/signin">
            <a>Login</a>
          </Link>
        </div>
      </Content>
    </Container>
  )
}
export default Navbar;