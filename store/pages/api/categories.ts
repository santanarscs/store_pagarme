import { NextApiRequest, NextApiResponse} from 'next'
import api from '../../service/api'

export default async function getAllCategories(request: NextApiRequest, response: NextApiResponse): Promise<void> {
  const {data: categories} = await api.get('categories');
  response.json(categories);

}