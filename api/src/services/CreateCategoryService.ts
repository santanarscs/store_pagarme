import { getCustomRepository } from 'typeorm';
import Category from '../models/Category';
import CategoriesRepository from '../repositories/CategoriesRepository';

interface CreateCategoryDTO {
  name: string;
}

class CreateCategoryService {
  public async execute({ name }: CreateCategoryDTO): Promise<Category> {
    const categoriesRepository = getCustomRepository(CategoriesRepository);
    const category = categoriesRepository.create({
      name,
    });
    await categoriesRepository.save(category);
    return category;
  }
}

export default CreateCategoryService;
