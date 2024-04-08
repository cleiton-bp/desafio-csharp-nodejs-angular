
const { getAllCategories, getCategoryById, postCategory, putCategory, deleteCategory } = require('../services/categoryService');

function categoryRoutes(app) {
    app.get("/categories", async (req, res) => {
        const categories = await getAllCategories()
        res.status(200).send(categories)
    })

    app.get("/categories/:id", async (req, res) => {
        const id = Number(req.params.id);
        const category = await getCategoryById(id);
        res.status(200).send(category);
    });

    app.post("/categories", async (req, res) => {
        if (!req.body.name) {
            res.status(400).send("Invalid value: 'name' are required");
            return;
        }

        const newCategory = await postCategory(
            req.body.name
        )
        res.status(201).send(newCategory)
    })

    app.put("/categories/:id", async (req, res) => {
        if (!req.body.name) {
            res.status(400).send("Invalid value: 'name' are required");
            return;
        }

        let updatedCategory = await putCategory(
            req.params.id,
            req.body.name
        )
        res.status(200).send(updatedCategory)
    })

    app.delete("/categories/:id", async (req, res) => {
        const id = Number(req.params.id);
        const category = await deleteCategory(id);
        res.status(200).send(category);
    });
}

module.exports = categoryRoutes;
