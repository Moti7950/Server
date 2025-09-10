import express from "express"
import jsonData from "../lib/postList.json" with {type: "json"}
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// // import utiliti 
import {filterPost ,checkUserLogin} from "../utils/utilityFunction.js"

// this user is not an admin user (admin web)
const users = express.Router();

users.post("/login", (req, res) => {
    try {
        const { userName, password } = req.body;
        console.log(req.body);
        if (userName && password) {
            // const hashedPassword = await bcrypt.hash(password, 12);
            const res = checkUserLogin(userName, password);
            console.log(res ? true: false);
            if (ok) {
                return res.status(200).json({ message: "Login ok" });
            } else {
                return res.status(401).json({ error: "Invalid credentials" });
            }
        }
        return res.status(400).json({ error: "Missing name or password" })
    }
    catch(err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error!!" })
    }
})

// work with curl -X DELETE  http://127.0.0.1:9085/api/users/deletePost/:1
// this api for delete a post
users.delete("/deletePost/:id", (req, res) => {
    const { id } = req.params || {};
    console.log("Hi from: user on route delete", id);
})

// work with curl -X POST http://127.0.0.1:9085/api/users/create/post
// this api for create a post
users.post("/create/post", (req, res) => {
    console.log("Hi from user on route create post");
})

// work with curl -X PUT http://127.0.0.1:9085/api/users/update/post/:2
// this api for update a post
users.put("/update/post/:id", (req, res) => {
    const { id } = req.params || {};
    console.log("Hi from user on route update post", id);

})

// Work with curl -X GET http://127.0.0.1:9085/api/users/show/posts
// this api for show all post
users.get("/show/posts", (req, res) => {
    console.log("Hi from user on route show all posts");
    try {
        res.json(jsonData)
    }
    catch { }
})


// work with curl -X GET  http://127.0.0.1:9085/api/users/showOne/post/:1
// this api for show one post
users.get("/showOne/post/:id", (req, res) => {
    const { id } = req.params || {};
    console.log("Hi from user on route show one post", id);
    const x = id.slice(1)
    const result = filterPost(x)
    console.log(typeof result, result);
    if (!result) return res.status(404).send("post not found");
    res.send(result)
})

export default users;