import { Router, Request, Response } from 'express';
import { getRepository, Like, FindOperator } from 'typeorm';
import multer from 'multer';
import uploadConfig from '../config/upload';
import Product from '../models/Product';
import CreateProductService from '../services/CreateProductService';

const productsRoutes = Router();
const upload = multer(uploadConfig);

productsRoutes.get(`/:id`, async (request, response) => {
  try {
    const { id } = request.params;
    const productsRepository = getRepository(Product);
    const product = await productsRepository.findOne(id);
    return response.json(product);
  } catch (err) {
    return response.status(400).json(err.response);
  }
});

interface SearchParams {
  [key: string]: FindOperator<string> | string;
}

productsRoutes.get('/', async (request: Request, response: Response) => {
  try {
    const { q, category_id, _page, _limit } = request.query;

    const params: SearchParams[] = [];
    if (q) {
      params.push({ name: Like(`%${q}%`) });
    }
    if (category_id) {
      params.push({ category_id: category_id as string });
    }

    const productsRepository = getRepository(Product);
    const countProducts = await productsRepository.count();
    const products = await productsRepository.find({
      where: params,
      skip: (Number(_page) - 1) * Number(_limit),
      take: Number(_limit),
    });
    response.header('x-total-count', String(countProducts));
    return response.json(products);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

productsRoutes.post(
  '/',
  upload.single('principal_image'),
  async (request: Request, response: Response) => {
    try {
      const principalImage = request.file.filename;
      const { name, description, price, quantity, category_id } = request.body;
      const createProduct = new CreateProductService();
      const product = await createProduct.execute({
        name,
        description,
        price,
        quantity,
        principalImage,
        category_id,
      });
      return response.json(product);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
);

export default productsRoutes;
