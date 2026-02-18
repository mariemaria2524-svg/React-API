const express = require("express");
const app = express();

const postRoutes = require("./routes/posts");

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/", postRoutes);

app.listen(3000, () => {
  console.log("Server started http://localhost:3000");
});
