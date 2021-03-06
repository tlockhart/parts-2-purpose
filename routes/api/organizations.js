const router = require("express").Router();
const organizationsController = require("../../controllers/organizationsController");


/************************************************
ROUTE: /api/organizations
Description: Use Express to return all unique organizations in the DB.
************************************************/
router.route('/')
.get(organizationsController.findOrganizationValues);

module.exports = router;
