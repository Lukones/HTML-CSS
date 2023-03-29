const bodyParser = require("body-parser");
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
const _ = require('lodash');
require('dotenv').config();

app.set("view-engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/wikiDB"), { useNewUrlParser: true };

const articleSchema = {
    "title": String,
    "content": String
};

const Article = mongoose.model("Article", articleSchema);

//////////////////////////////////////////////////Requests Targetting A Specific Article/////////////////////////////////////

app.route("/articles")
    .get((req, res) => {
        Article.find({})
            .then((result) => {
                if (!result) {
                    const mensagemErro = "no results found";
                    console.log(mensagemErro);
                    res.status(404).send(mensagemErro);
                } else {
                    res.send(result);
                }
            })
            .catch((err) => {
                const mensagemErro = "An error occurred while fetching the articles";
                console.log(mensagemErro, err);
                res.status(500).send(mensagemErro);
            })
    })
    .post((req, res) => {
        const newArticle = Article({
            "title": req.body.title,
            "content": req.body.content
        });
        newArticle.save()
            .then((result) => {
                if (!result) {
                    const mensagemErro = "no results found";
                    console.log(mensagemErro);
                    res.status(404).send(mensagemErro);
                } else {
                    res.send("Successfully added a new article.");
                }
            })
            .catch((err) => {
                const mensagemErro = "An error occurred while fetching the articles";
                console.log(mensagemErro, err);
                res.status(500).send(mensagemErro);
            })
    })
    .delete((req, res) => {
        Article.deleteMany()
            .then((result) => {
                if (!result) {
                    const mensagemErro = "no results found";
                    console.log(mensagemErro);
                    res.status(404).send(mensagemErro);
                } else {
                    res.send("Successfully deleted a new article.");
                }
            })
            .catch((err) => {
                const mensagemErro = "An error occurred while fetching the articles";
                console.log(mensagemErro, err);
                res.status(500).send(mensagemErro);
            })
    });

//////////////////////////////////////////////////Requests Targetting A Specific Article/////////////////////////////////////

app.route("/articles/:articleTitle")


    .get((req, res) => {

        Article.findOne({ title: req.params.articleTitle })
            .then((foundArticle) => {
                if (foundArticle) {
                    res.send(foundArticle)
                } else {
                    res.send("No articles matching that title was found.")
                }
            })
            .catch((err) => {
                console.log(err)
            })

    })

    .put((req, res) => {
        Article.replaceOne(
            { title: req.params.articleTitle },
            { title: req.body.title, content: req.body.content },
            { overwrite: true }
        )
            .then((result) => {
                if (!result) {
                    res.send("ERROR updated article.")
                } else {
                    res.send("Successfully updated article.")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    })

    .patch((req, res) => {
        Article.updateOne(
            { title: req.params.articleTitle },
            { $set: req.body }
        )
            .then((result) => {
                if (!result) {
                    res.send("ERROR updated article.")
                } else {
                    res.send("Successfully updated article.")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    })

    .delete((req, res) => {
        Article.deleteOne({ title: req.params.articleTitle })
            .then((result) => {
                if (!result) {
                    res.send("ERROR remove article.")
                } else {
                    res.send("Successfully remove article.")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    });



app.listen(3000, () => {
    console.log("App listening on port 3000")
});
