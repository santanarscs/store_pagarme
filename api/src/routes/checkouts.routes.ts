import { Router } from 'express';
import CreateCheckoutService from '../services/CreateCheckoutService';

const checkoutsRouter = Router();

checkoutsRouter.post('/', async (request, response) => {
  try {
    const {
      address,
      customer,
      card_hash,
      items,
      amount,
      installments,
    } = request.body;
    const createCheckout = new CreateCheckoutService();
    await createCheckout.execute({
      address,
      customer,
      card_hash,
      items,
      amount,
      installments,
    });
    return response.json({ ok: true });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default checkoutsRouter;
