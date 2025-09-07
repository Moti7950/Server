import express from "express"

// this user is an admin user web
const adminUsers = express.Router();

// this api for delete a post
adminUsers.delete()

// this api for create a post
adminUsers.post()

// this api for update a post
adminUsers.put()

// this api for show all post
adminUsers.get()

export default adminUsers;