require('dotenv').config();
const fastify = require("fastify");
const productRoutes = require('./controllers/productController');
const categoryRoutes = require('./controllers/categoryController');
const cors = require('fastify-cors');

const app = fastify();

app.register(cors, {
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE" ],  
});

productRoutes(app);
categoryRoutes(app);

app.listen({
    port: 3000,
}).then((address) => {
    console.log(`http server running at ${address}`)
})
