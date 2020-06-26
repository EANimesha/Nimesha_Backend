const express = require("express");
const cors = require("cors");
const { getCoordinates } = require("./coordinates");

const app = express();
app.use(cors());

const port = 3000;

app.get("/api/:height/:res", getCoordinates);

app.listen(port, () => console.log(`app is running on port 3000`));

