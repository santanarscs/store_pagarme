import { GetStaticProps } from "next";
import api from "../service/api";
import { formatPrice } from "../util/formatPrice";
import { useCallback } from "react";
import { useCart } from "../hooks/cart";
import Search from "../components/Search";
import { Container, Content, ProductList } from '../styles'

interface Image { 
  id: string;
  url: string
}
interface Product {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  category_id: string
  principal_image: string;
  image?: Image[]
  priceFormatted?: string
}

interface Props {
  products: Product[]
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<Product[]>('products')
  const products = response.data.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price)
  }))
  return {
    props: {
      products
    }
  }
}

const Home: React.FC<Props> = ({products}) => {
  const { addToCart } = useCart()
  const handleAddProduct = useCallback(async (id: string) => {
    addToCart(id)
  }, [])
  const handleSearch = useCallback(async (term: string) => {
    console.log(term)

  },[])
  return (
    <Container>
      <h2>Produtos</h2>
      <Search 
        placeholder="Buscar produto"
        handleSearch={handleSearch}
      />

      <Content>
        <ProductList>
          {products?.map(product => (
            <li key={product.id} >
              <img src={`http://localhost:3333/files/${product.principal_image}`} alt=""/>
              <div>
              <strong>{product.name}</strong>
              <small>{product.priceFormatted}</small>
              <button type="button" onClick={() => handleAddProduct(product.id)}>Adicionar ao carrinho</button>
              </div>
            </li>
          ))}
        </ProductList>
      </Content>
    </Container>
  )
}

export default Home;