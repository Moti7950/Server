import express from "express"

// this user is an admin user web
const adminUsers = express.Router();

// this api for delete a post
adminUsers.delete("deletePost/:id", (req, res) => {
    console.log("Hi from admin! user on route delete");

})

// this api for create a post
adminUsers.post("/create/post", (req, res) => {
    console.log("Hi from admin! user on route create post");
})

// this api for update a post
adminUsers.put("/update/post/:id", (req, res) => {
    console.log("Hi from admin! user on route update post");
})

// this api for show all post
adminUsers.get("/show/posts", (req, res) => {
    console.log("Hi from admin! user on route show all posts");
})

export default adminUsers;