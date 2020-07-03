import { NextApiRequest, NextApiResponse} from 'next'
import api from '../../service/api'

export default async function getAllProducts(request: NextApiRequest, response: NextApiResponse): Promise<void> {
  const {data: products} = await api.get('products');
  response.json(products);

}