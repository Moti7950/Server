import express from "express"
import users from "./users.js"
import adminUsers from "./adminUsers.js"

const linkodcode = express()

//this middleware for CROS fix
linkodcode.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
     if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// this middleware for convert to json 
linkodcode.use(express.json())

// this middleware for users api
linkodcode.use("/api/users", users)
// this middleware for admin api
linkodcode.use("/api/admin", adminUsers)

export default linkodcode;