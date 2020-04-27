var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Homepage" });
});

router.get("/about", function (req, res, next) {
  res.render("about", { title: "About Page" });
});

router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact Page" });
});

router.get("*", function (req, res, next) {
  res.render("error", { title: "An Error Occured!" });
});

module.exports = router;
