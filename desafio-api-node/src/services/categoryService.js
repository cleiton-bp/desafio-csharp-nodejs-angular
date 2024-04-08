const axios = require("axios");
const URL = process.env.URL

async function getAllCategories() {
    const response = await axios.get(`${URL}/Category`)
    return response.data
}

async function getCategoryById(id) {
    const category = await axios.get(`${URL}/Category/${id}`)
    if (category.data.id !== id) {
        return "category not found";
    }

    const response = await axios.get(`${URL}/Category/${id}`)
    return response.data
}

async function postCategory(name) {
    let body = {
        "name": name
    }

    const response = await axios.post(`${URL}/Category`, body)
    return response.data
}

async function putCategory(id, name) {
   
    let body = {
        "name": name 
    };

    const response = await axios.put(`${URL}/Category/${id}`, body);
    return response.data;
}

async function deleteCategory(id) {
    const category = await axios.get(`${URL}/Category/${id}`)
    if (category.data.id !== id) {
        return "category not found";
    }

    await axios.delete(`${URL}/Category/${id}`)
    return "category deleted successfully";
}

module.exports = { getAllCategories, getCategoryById, postCategory, putCategory, deleteCategory };