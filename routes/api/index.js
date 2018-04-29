
const router = require("express").Router();

const housesRoutes = require("./houses");
const houseUserRelashionship = require("./house-user-relationship");
const users = require("./users");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
