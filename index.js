const express = require("express");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
const app = express();

const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));



let posts = [
    {
        id:uuidv4(),
        username:"shreeshail",
        content:"I am coder"
    },
    {
        id:uuidv4(),
        username:"prajwal",
        content:"I am tester"
    },
    {
        id:uuidv4(),
        username:"nandish",
        content:"I am doing engineering in BVB college"
    },
];




app.get("/posts",(req,res) => {
    res.render("index.ejs",{ posts });
})


app.get("/posts/new",(req,res) => {
    res.render("new.ejs");
})


app.post("/posts",(req,res) => {
    // console.log(req.body);
    let id = uuidv4();
    let { username , content} = req.body;
    posts.push({id,username,content});
    res.redirect("/posts");
})


app.get("/posts/:id",(req,res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);//find a post a same id in query strings
    res.render("show.ejs",{ post });
})


app.patch("/posts/:id",(req,res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");

});


app.get("/posts/:id/edit",(req,res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);//find a post a same id in query strings
    // let user = post.username;
    // console.log(user);
    res.render("edit.ejs",{ post });
})


app.delete("/posts/:id",(req,res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");


}
);




app.listen(process.env.PORT || port,() => {
    console.log("listing at port 8080");
})
