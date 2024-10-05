import fastify from 'fastify';
import { registerRoutes } from './http/routes/register.route';

export const app = fastify();

app.register(registerRoutes);
