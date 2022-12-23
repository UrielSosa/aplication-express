const Product = require('../data/models/Product');

let controller = {
    detail: async (req, res) => {
        const product = await Product.findById(req.params.id);
        res.render("products/detail", { producto: product });
    },
    create: (req, res) => {
        res.render("products/create");
    },
    edit: (req, res) => {
        res.render("products/edit");
    },
    store: async (req, res) => {
        // console.log(req.body); // Esto viene desde un formulario
        if (!req.file) {
            return res.send("Oye, la imagen tiene que ser .jpg, .png, .gif");
        }
        
        await Product.create({...req.body, image: req.file.filename})
        
        return res.redirect("/");
    },
};

module.exports = controller;