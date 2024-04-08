
const { getAllProducts, getProductById, postProduct, putProduct, deleteProduct } = require('../services/productService');

function productRoutes(app) {
    app.get("/products", async (req, res) => {
        const products = await getAllProducts()
        res.status(200).send(products)
    })

    app.get("/products/:id", async (req, res) => {
        const id = Number(req.params.id);
        const product = await getProductById(id);
        res.status(200).send(product);
    });

    app.post("/products", async (req, res) => {

        if (!req.body.name || !req.body.price) {
            res.status(400).send("Invalid value: 'name' and 'price' are required");
            return;
        }

        const newProduct = await postProduct(
            req.body.name,
            req.body.description,
            req.body.price,
            req.body.categoryId
        )
        res.status(201).send(newProduct)
    })

    app.put("/products/:id", async (req, res) => {
        let updatedProduct = await putProduct(
            req.params.id,
            req.body.name,
            req.body.description,
            req.body.price,
            req.body.categoryId
        )
        res.status(200).send(updatedProduct)
    })

    app.delete("/products/:id", async (req, res) => {
        const id = Number(req.params.id);
        const product = await deleteProduct(id);
        res.status(200).send(product);
    });
}

module.exports = productRoutes;
