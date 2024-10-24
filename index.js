const express = require("express");
const app = express();
const port = 5500;

app.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            name: "usama gohar",
            age: "25",
            lastname: "Git github",
            Task: "First Task in DevOps Journey"
        },
        {
            id: 2,
            name: "Linux",
            age: "25",
            lastname: "Git",
            Task: "First Task in DevOps Journey"
        },
        {
            id: 3,
            name: "Docker",
            version: "25",
            lastname: "Github",
            Task: "First Task in DevOps Journey"
        }
    ]);
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
