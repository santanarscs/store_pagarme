import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';

const usersRoutes = Router();

usersRoutes.get('/', async (request, response) => {
  try {
    const usersRepository = getCustomRepository(UsersRepository);
    const users = await usersRepository.find();
    return response.json(users);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRoutes.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;
    const createUser = new CreateUserService();
    const user = await createUser.execute({ name, email, password });
    delete user.password;
    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRoutes;
