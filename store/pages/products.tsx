import { GetServerSideProps } from "next";
import api from "../service/api";
import getAllProducts from "./api/products";
import { useState, useCallback } from "react";
import Search from "../components/Search";
import Router, { useRouter } from "next/router";




export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { category_id, term, page} = ctx.query
  const params = {
    category_id,
    name: term,
    page
  }
  const products = await getAllProducts(params);
  return { props: {products} }
}
interface Product {
  id: string;
  name: string;
  description: string;
}
interface Props {
  products: Product[]
}

const Products: React.FC<Props> = ({products}) => {
  const { query } = useRouter();
  const handleSearch = useCallback(async (term: string) => {
    console.log(term)
    Router.push({
      pathname: '/products',
      query: {
        ...query,
        term,
      }
    })

  },[])
  return (
    <div>
      <div>
        <Search placeholder="Buscar em produtos" handleSearch={handleSearch}/>
      </div>
      <div>
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}



export default Products;