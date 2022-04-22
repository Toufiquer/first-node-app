const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World! 2");
});
const users = [
    { id: 1, name: "Name 1", email: "avx@gmail.com", phone: "0178888888" },
    { id: 2, name: "Name 2", email: "avx@gmail.com", phone: "0178888888" },
    { id: 3, name: "Name 3", email: "avx@gmail.com", phone: "0178888888" },
    { id: 4, name: "Name 4", email: "avx@gmail.com", phone: "0178888888" },
    { id: 5, name: "Name 5", email: "avx@gmail.com", phone: "0178888888" },
    { id: 6, name: "Name 6", email: "avx@gmail.com", phone: "0178888888" },
    { id: 7, name: "Name 7", email: "avx@gmail.com", phone: "0178888888" },
    { id: 8, name: "Name 8", email: "avx@gmail.com", phone: "0178888888" },
    { id: 9, name: "Name 9", email: "avx@gmail.com", phone: "0178888888" },
];
app.get("/user", (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user =>
            user.name.toLowerCase().includes(search)
        );
        res.send(matched);
    } else {
        res.send(users);
    }
});
app.get("/user/:id", (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    // user || "NOT Found";
    res.send(user);
});
app.post("/user", (req, res) => {
    console.log("request success", req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(users);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
