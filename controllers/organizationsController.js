const db = require("../models");

// Defining methods for the organizationsController
module.exports = {
  findOrganizationValues: function (req, res) {
    let field = "organization";
    db.Product.distinct(field)
      .then(dbModel => {
        res.status(200).json(dbModel);
      })
    .catch(err => res.status(422).json(err));
  }
};
