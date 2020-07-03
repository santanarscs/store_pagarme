import { NextApiRequest, NextApiResponse } from 'next'
import api from '../../../service/api'

export default async function getAllProductsByCategoryId(request: NextApiRequest, response: NextApiResponse) {
  const { category_id } = request.query;
  const {data: products} = await api.get(`products?category_id=${category_id}`)
  response.json(products)
}