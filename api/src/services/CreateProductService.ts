import { getRepository } from 'typeorm';
import Product from '../models/Product';
import Category from '../models/Category';

interface Request {
  name: string;
  description: string;
  price: number;
  quantity: number;
  principalImage: string;
  category_id: string;
}
class CreateProductService {
  public async execute({
    name,
    description,
    price,
    quantity,
    principalImage,
    category_id,
  }: Request): Promise<Product> {
    const productsRepository = getRepository(Product);
    const categoriesRepository = getRepository(Category);
    const category = await categoriesRepository.findOne(category_id);

    const product = productsRepository.create({
      name,
      description,
      price,
      quantity,
      principal_image: principalImage,
      category,
    });
    await productsRepository.save(product);
    return product;
  }
}
export default CreateProductService;
