import { FastifyInstance } from 'fastify';
import { registerController } from '../controllers/register.controller';

export const registerRoutes = async (app: FastifyInstance) => {
  app.post('/users', registerController);
};
