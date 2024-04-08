require('dotenv').config();
const fastify = require("fastify");
const axios = require("axios");

const app = fastify();

const URL = process.env.URL

// buscar todods os products
async function getAllProducts() {
    const response = await axios.get(`${URL}`)
    return response.data
}
// buscar um produto por id
async function getProductById(id) {
    const response = await axios.get(`${URL}/${id}`)
    return response.data
}
// criar um produto
async function postProduct(Name, Description, Price, CategoryId = null) {
    let body = {}
    if (CategoryId !== null) {
        body = {
            "name": Name,
            "description": Description,
            "price": Price,
            categoryId: CategoryId
        }
    } else {
        body = {
            "name": Name,
            "description": Description,
            "price": Price,
        }
    }
    const response = await axios.post(`${URL}`, body)
    console.log(response.data)
}
// Atualizar um produto
async function putProduct(
    id,
    name,
    description,
    price,
    categoryId
) {
    let body;
    let verifica = categoryId

    const product = await axios.get(`${URL}/${id}`)
    
    if (verifica === undefined || verifica === null) {
        body = {
            "name": name !== undefined ? name : product.data.name,
            "description": description !== undefined ? description : product.data.description,
            "price": price !== undefined ? price : product.data.price,
            "categoryId": product.data.categoryId
        }
    
        const response = await axios.put(`${URL}/${id}`, body)
        return response.data
    }else {
        body = {
            "name": name !== undefined ? name : product.data.name,
            "description": description !== undefined ? description : product.data.description,
            "price": price !== undefined ? price : product.data.price,
            "categoryId": categoryId !== undefined ? categoryId : product.data.categoryId
        }
    
        const response = await axios.put(`${URL}/${id}`, body)
        return response.data
    }
}
// Deletar um produto
async function deleteProduct(id) {
    const response = await axios.delete(`${URL}/${id}`)
    console.log(response.data)
}
// --------------------------------------------

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



app.listen({
    port: 3000,
}).then((address) => {
    console.log(`http server running at ${address}`)
})