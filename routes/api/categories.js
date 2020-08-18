const router = require("express").Router();
const categoriesController = require("../../controllers/categoriesController");


/**************************************************
ROUTE: /api/categories/:organization
Description: Use Express to find all Category Values for a particular organization:
Setup: The first path will look for urls starting with products  "products/:category".
Example: '/categories/Culturing'
**************************************************/
router.route('/:organization')
.get(categoriesController.findCategoryValues);

module.exports = router;
