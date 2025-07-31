import { Router } from 'express';
import { prisma } from '../lib/db.js';

const router = Router();

router.get('/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    return res.send(products);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const productFound = await prisma.product.findFirst({
      where: {
        id: req.params.id,
      },
      include: {
        category: true,
      },
    });

    if (!productFound) {
      res.status(404).json({ error: 'Product not found' });
    }
    res.json(productFound);
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
});

router.post('/products', async (req, res) => {
  try {
    const newProduct = await prisma.product.create({
      data: req.body,
    });
    return res.send(newProduct);
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
});

router.put('/products/:id', async (req, res) => {
  try {
    const productUpdated = await prisma.product.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });

    res.json(productUpdated);
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
});

router.delete('/products/:id', async (req, res) => {
  try {
    const productDeleted = await prisma.product.delete({
      where: {
        id: req.params.id,
      },
    });

    if (!productDeleted) {
      res.status(404).json({ error: 'Product not found' });
    }

    res.json(productDeleted);
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
});

export default router;
