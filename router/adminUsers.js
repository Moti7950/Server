import express from "express"

// this user is an admin user web
const adminUsers = express.Router();

// work with curl -X DELETE  http://127.0.0.1:9085/api/admin/deletePost/:1
// this api for delete a post
adminUsers.delete("/deletePost/:id", (req, res) => {
    const { id } = req.params || {};
    console.log("Hi from admin! user on route delete");

})

// work with curl -X POST http://127.0.0.1:9085/api/admin/create/post
// this api for create a post
adminUsers.post("/create/post", (req, res) => {
    console.log("Hi from admin! user on route create post");
})

//work with curl -X PUT http://127.0.0.1:9085/api/admin/update/post/:2
// this api for update a post
adminUsers.put("/update/post/:id", (req, res) => {
    const { id } = req.params || {};
    console.log("Hi from admin! user on route update post");
})

// work with curl -X GET http://127.0.0.1:9085/api/admin/show/posts
// this api for show all post
adminUsers.get("/show/posts", (req, res) => {
    console.log("Hi from admin! user on route show all posts");
})

export default adminUsers;