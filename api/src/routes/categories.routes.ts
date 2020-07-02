import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CategoriesRepository from '../repositories/CategoriesRepository';
import CreateCategoryService from '../services/CreateCategoryService';

const categoriesRouter = Router();

categoriesRouter.get('/', async (request, response) => {
  try {
    const categoriesRepository = getCustomRepository(CategoriesRepository);
    const categories = await categoriesRepository.find();
    return response.json(categories);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

categoriesRouter.post('/', async (request, response) => {
  try {
    const { name } = request.body;
    const createCategory = new CreateCategoryService();
    const category = await createCategory.execute({ name });
    return response.json(category);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default categoriesRouter;
