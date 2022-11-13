const express = require('express');
const routerApi = require('./routes');

const app = express();

app.use(express.json());

const mutants = [,
    { id: 2, name: 'Batman', age: 40, Vehicle: 'Advanced military car', isAlive: true, insidePrision: false },
    { id: 3, name: 'Punisher', age: 42, Vehicle: 'Van', isAlive: true, insidePrision: false },
];


const port = process.env.port || 8080;
app.listen(port, () => console.log(`Listen port ${port}...`));

routerApi(app);