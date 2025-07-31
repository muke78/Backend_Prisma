import express from 'express';
import morgan from 'morgan';
import productsRoutes from './routes/products.routes.js';
import categoriesRoutes from './routes/categories.routes.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({
    description: 'Backend_Prisma',
  });
});

app.use('/api', categoriesRoutes);
app.use('/api', productsRoutes);

app.listen(3000);
console.log('Server running on port http://localhost:3000');
