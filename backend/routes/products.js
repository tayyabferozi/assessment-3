const router = require("express").Router();

const {
  getAllProducts,
  getProduct,
  bulkCreate,
  deleteAll,
  editProduct,
} = require("../controllers/products");

router.get("/", getAllProducts);

router.get("/init-prods", bulkCreate);

router.get("/delete-all", deleteAll);

router.get("/:id", getProduct);

router.post("/:id", editProduct);

module.exports = router;
