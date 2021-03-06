'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller');
const authService = require('../services/auth.service');
const createProductContract = require('../models/contracts/create-product.contract');

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.get('/tags/:tag', controller.getByTag);
router.post('/', [authService.isAdmin, createProductContract.validate], controller.post);
router.put('/:id', authService.isAdmin, controller.put);
router.delete('/', authService.isAdmin, controller.delete);

module.exports = router;