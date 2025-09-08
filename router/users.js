import express from "express"

// this user is not an admin user (admin web)
const users = express.Router();

// this api for delete a post
users.delete("deletePost/:id", (req, res)=>{
    console.log("Hi from admin! user on route delete");
    // const {id} = req.params || {}
})

// this api for create a post
users.post("/create/post",(req, res)=>{
    console.log("Hi from user on route create post");
})

// this api for update a post
users.put("/update/post/:id",(req, res)=>{
    console.log("Hi from user on route update post");
})

// this api for show all post
users.get("/show/posts",(req, res)=>{
    console.log("Hi from user on route show all posts");
})

export default users;