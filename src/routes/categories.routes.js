import { Router } from 'express';
import { prisma } from '../lib/db.js';

const router = Router();

router.get('/categories', async (req, res) => {
  try {
    const categories = await prisma.categroy.findMany({
      include: {
        products: true,
      },
    });
    res.json(categories);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get('/categories/:id', async (req, res) => {
  try {
    const categoriesFound = await prisma.product.findFirst({
      where: {
        id: req.params.id,
      },
    });

    if (!categoriesFound) {
      res.status(404).json({ error: 'Category not found' });
    }
    res.json(categoriesFound);
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
});

router.post('/categories', async (req, res) => {
  try {
    const newCategory = await prisma.categroy.create({
      data: req.body,
    });
    res.json(newCategory);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.put('/categories/:id', async (req, res) => {
  try {
    const categoryUpdated = await prisma.categroy.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    res.json(categoryUpdated);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.delete('/categories/:id', async (req, res) => {
  try {
    const categoryDeleted = await prisma.categroy.delete({
      where: {
        id: req.params.id,
      },
    });
    res.json(categoryDeleted);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
