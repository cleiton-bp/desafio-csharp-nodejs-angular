const axios = require("axios");
const URL = process.env.URL

async function getAllProducts() {
    const response = await axios.get(`${URL}/Product`)
    return response.data
}

async function getProductById(id) {
    const product = await axios.get(`${URL}/Product/${id}`)
    if (product.data.id !== id){
        return "product not found";
    }

    const response = await axios.get(`${URL}/Product/${id}`)
    return response.data
}

async function postProduct(Name, Description, Price, CategoryId = null) {
    let body = {}

    if (CategoryId !== null) {
        body = {
            "name": Name,
            "description": Description,
            "price": Price,
            categoryId: CategoryId
        }
    } else if (CategoryId === null) {
        body = {
            "name": Name,
            "description": Description,
            "price": Price,
        }
    } else {
        body = {
            "name": Name,
            "description": Description,
            "price": Price,
        }
    }

    const response = await axios.post(`${URL}/Product`, body)
    return response.data
}

async function putProduct(id, name, description, price, categoryId) {
    const product = await axios.get(`${URL}/Product/${id}`);

    let body = {
        "name": name !== undefined ? name : product.data.name,
        "description": description !== undefined ? description : product.data.description,
        "price": price !== undefined ? price : product.data.price,
        "categoryId": categoryId !== undefined ? categoryId : product.data.categoryId
    };

    if (categoryId === null) {
        delete body.categoryId;
    }

    const response = await axios.put(`${URL}/Product/${id}`, body);
    return response.data;
}

async function deleteProduct(id) {
    const product = await axios.get(`${URL}/Product/${id}`)
    if (product.data.id !== id){
        return "product not found";
    }

    await axios.delete(`${URL}/Product/${id}`)
    return "Product deleted successfully";
}

module.exports = { getAllProducts, getProductById, postProduct, putProduct, deleteProduct };