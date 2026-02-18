const express = require("express");
const router = express.Router();

let posts = [];

router.get("/", (req, res) => {
    res.render("index", { posts: posts });
});

router.post("/post", (req, res) => {

    const title = req.body.title;
    const content = req.body.content;

    posts.push({
        title: title,
        content: content
    });

    res.redirect("/");
});

router.get("/post/:id", (req, res) => {

    const id = req.params.id;
    const post = posts[id];

    res.render("post", { post: post });

});

module.exports = router;
