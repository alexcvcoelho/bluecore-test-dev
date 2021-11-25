const express = require("express");
const router = express.Router();

const apiUrl = process.env.API_URL || "http://localhost:3000/api/";
const rootUrl = process.env.ROOT_URL || "http://localhost:3000/";

router.get("/", (request, response) => {
  response.render("index.ejs", {
    apiUrl,
    rootUrl,
    title: "Bluecore Template: Node + EJS",
    layout: "./layouts/default",
  });
});

module.exports = router;
