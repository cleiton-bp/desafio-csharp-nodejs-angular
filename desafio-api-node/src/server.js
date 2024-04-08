require('dotenv').config();
const fastify = require("fastify");
const productRoutes = require('./controllers/productController');
const categoryRoutes = require('./controllers/categoryController');

const app = fastify();

productRoutes(app);
categoryRoutes(app);

app.listen({
    port: 3000,
}).then((address) => {
    console.log(`http server running at ${address}`)
})
