import { NextApiRequest, NextApiResponse} from 'next'
import api from '../../../service/api'

export default async function getProductsById(request: NextApiRequest, response: NextApiResponse): Promise<void> {
  const { id } =request.query
  const {data: product} = await api.get(`products/${id}`);
  response.json(product);

}