const express = require('express');
const path = require('path');
const router = require('./router');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'client');
const PORT = process.env.PORT || 3000 ;

console.log(PUBLIC_DIR)

const app = express();

app.use(express.static(PUBLIC_DIR));

app.use('/bundles', router.bundles);
app.use('/api', router.api);

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
