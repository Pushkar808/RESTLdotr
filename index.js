const express = require("express");
const cors = require("cors");
const http = require('http');
require('dotenv').config();
const mainRoute = require("./routes");
const mondoDb = require('./config/mongoConfig')
const app = express();
const server = http.createServer(app);

app.set('trust proxy', true);
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.status(200).send('Hello, World!'));

//routes to redirect to paths
app.use("/api/v1", mainRoute);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});