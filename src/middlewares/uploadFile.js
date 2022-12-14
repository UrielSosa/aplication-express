const path = require("path");
const multer = require("multer");

const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images/products");
    },
    filename: function (req, file, cb) {
        const fileExtension = path.extname(file.originalname);
        const randomName = Date.now() + fileExtension;
        cb(null, randomName);
    },
});

const upload = multer({
    storage: multerStorage,
    fileFilter: function (req, file, cb) {
        // Si la extensión del archivo NO es la que espero
        const fileExtension = path.extname(file.originalname);

        if (![".jpg", ".png", ".gif"].includes(fileExtension)) {
            return cb(null, false);
        }

        // Si la extensión del archivo SI es la que espero
        cb(null, true);
    },
});

module.exports = upload;
