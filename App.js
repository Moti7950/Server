import linkodcode from "./router/express.js"

const PORT = 9085;

linkodcode.listen(PORT,()=> console.log(`Im listing to you at port ${PORT}`));