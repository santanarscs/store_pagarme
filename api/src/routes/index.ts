import { Router } from 'express';
import categoriesRouter from './categories.routes';
import usersRoutes from './users.routes';
import productsRoutes from './products.routes';
import sessionsRouter from './sessions.routes';
import checkoutsRouter from './checkouts.routes';

const routes = Router();
routes.use('/categories', categoriesRouter);
routes.use('/users', usersRoutes);
routes.use('/products', productsRoutes);
routes.use('/sessions', sessionsRouter);
routes.use('/checkouts', checkoutsRouter);

export default routes;
