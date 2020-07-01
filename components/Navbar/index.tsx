import React from 'react'
import Link from 'next/link'
import { FiShoppingBag, FiUser} from 'react-icons/fi'
import { useAuth } from '../../hooks/auth'
import { useCart } from '../../hooks/cart'
import { Container, Content } from './styles'

const Navbar: React.FC = () => {
  const { user } = useAuth()
  const { items } = useCart()
  return (
    <Container>
      <Content>
        <Link href="/">
          <a >
           <img src="/logo.svg" alt=""/>
          </a>
        </Link>
        <div>
          <Link href="/cart">
            <a>
              {items.length > 0 && <span>{items.length}</span>}
              <FiShoppingBag size={20}/>
            </a>
          </Link>
          {!!user ? (
            <Link href="/profile">
              <a><FiUser size={20}/></a>
            </Link>
          ) : (
          <Link href="/signin">
            <a><FiUser size={20}/></a>
          </Link>
          )}
        </div>
      </Content>
    </Container>
  )
}
export default Navbar;