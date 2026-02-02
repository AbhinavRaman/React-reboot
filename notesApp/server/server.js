// this file's job is to start the server
const app = require("./src/app");

app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000")
});