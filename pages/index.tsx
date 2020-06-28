import { GetStaticProps } from "next";
import api from "../service/api";
import { formatPrice } from "../util/formatPrice";
import { useCallback } from "react";
import { useCart } from "../hooks/cart";
import Cart from "../components/Cart";

interface Product {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  category_id: string
  images: any[]
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
  return (
    <div style={{maxWidth: "900px", margin: "0 auto"}}>
      <h2>Produtos</h2>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <ul style={{display: "flex", listStyle: "none"}}>
          {products?.map(product => (
            <li key={product.id} style={
                {
                  display: "flex", 
                  flexDirection: "column", 
                  justifyContent: "center", 
                  alignItems: "center",
                  border: '1px solid #b3b3b3',
                  padding: '10px',
                  margin: '10px'
                }
              }>
              <strong>{product.name}</strong>
              <small>{product.priceFormatted}</small>
              <button type="button" onClick={() => handleAddProduct(product.id)}>Adicionar ao carrinho</button>
            </li>
          ))}
        </ul>
        <Cart />
      </div>
    </div>
  )
}

export default Home;