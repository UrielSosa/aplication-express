const express = require("express");
const router = express.Router();

// Middlewares
const uploadFile = require("../middlewares/uploadFile");

// Controller
const controller = require("../controllers/productsController");

router.get("/detail/:id", controller.detail);
router.get("/edit/:id", controller.edit);
router.get("/create", controller.create);
router.post("/create", uploadFile.single("productImage"), controller.store);

module.exports = router;
