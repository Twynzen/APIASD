const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');
const app = express();




app.use(cors());
app.use(express.json());


const port = process.env.port || 8080;
app.listen(port, () => console.log(`Listen port ${port}...`));

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);