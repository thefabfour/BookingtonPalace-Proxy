const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');

const PORT = 3000 || process.env.PORT;

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));

app.use('/bundles', router.bundles);
app.use('/api', router.api);

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
