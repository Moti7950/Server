import express from "express"

// this user is not an admin user (admin web)
const users = express.Router();

// this api for delete a post
users.delete()

// this api for create a post
users.post()

// this api for update a post
users.put()

// this api for show all post
users.get()

export default users;