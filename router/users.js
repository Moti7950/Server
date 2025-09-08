import express from "express"

// this user is not an admin user (admin web)
const users = express.Router();

// work with curl -X DELETE  http://127.0.0.1:9085/api/users/deletePost/:1
// this api for delete a post
users.delete("/deletePost/:id", (req, res)=>{
    const {id} = req.params || {};
    console.log("Hi from: user on route delete",id);
})

// work with curl -X POST http://127.0.0.1:9085/api/users/create/post
// this api for create a post
users.post("/create/post",(req, res)=>{
    console.log("Hi from user on route create post");
})

// work with curl -X PUT http://127.0.0.1:9085/api/users/update/post/:2
// this api for update a post
users.put("/update/post/:id",(req, res)=>{
    const {id} = req.params || {};
    console.log("Hi from user on route update post",id);

})

// Work with curl -X GET http://127.0.0.1:9085/api/users/show/posts
// this api for show all post
users.get("/show/posts",(req, res)=>{
    console.log("Hi from user on route show all posts");
})

export default users;