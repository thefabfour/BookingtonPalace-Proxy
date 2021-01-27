const { Router } = require('express');
// const { proxyMiddleware } = require('./proxyMiddleware');
const {
  service1, service2, service3,
} = require('../config/services.js');

const router = Router();

router.use(service1.api, proxyMiddleware({ target: service1.url, changeOrigin: true }));
router.use(service2.api, proxyMiddleware({ target: service2.url, changeOrigin: true }));
router.use(service3.api, proxyMiddleware({ target: service3.url, changeOrigin: true }));

module.exports = router;