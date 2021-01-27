const { Router } = require('express');
const axios = require('axios')
const { createProxyMiddleware } = require('http-proxy-middleware');
const { service2 } = require('../config/services.js');

const router = Router();

router.use('/service1.js', (req, res) => {
  axios.get(`${service1.url}/${service1.bundle}`)
    .then((response) => {
      res.type('.js');
      res.send(response.data);
    });
});

router.use('/service2.js', (req, res) => {
  axios.get(`${service1.url}/${service1.bundle}`)
    .then((response) => {
      res.type('.js');
      res.send(response.data);
    });
});

router.use('/service3.js', (req, res) => {
  axios.get(`${service1.url}/${service1.bundle}`)
    .then((response) => {
      res.type('.js');
      res.send(response.data);
    });
});

module.exports = router;