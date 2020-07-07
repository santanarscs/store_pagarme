import { GetStaticProps, GetServerSideProps } from "next";
import api from "../service/api";

import { Container, Content, ProductList } from '../styles'
import getAllCategories from "./api/categories";
import Link from "next/link";
import Router, { useRouter } from "next/router";

interface Category {
  id: string;
  name: string;
}

interface Props {
  categories: Category[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  const {data: categories} = await api.get('categories');
  return { props: {categories} }
}

//listar todas as categorias do banco de dados

const Home: React.FC<Props> = ({categories}) => {

  const { query } = useRouter()

  return (
    <Container>
      <h2>Pagina inicial</h2>
      <Content>
        <ul>
          {categories.map(category => (
           <li key={category.id}>
             <Link href={{
               pathname: '/products',
               query: {
                 category_id: category.id,
                 page: 1
               }
             }} >
              <a>{category.name}</a>
             </Link>
           </li>
          ))}
        </ul>
      </Content>
    </Container>
  )
}

export default Home;