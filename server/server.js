const express = require("express");
const Rollbar = require("rollbar");
const path = require("path");

const rollbar = new Rollbar({
  accessToken: '59295395ee1148f0b0497da531809ecb',
  captureUncaught: true,
  captureUnhandledRejections: true
});

rollbar.log("Hello World!");

const app = express();

app.use(express.static("public"));
app.use(rollbar.errorHandler());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
    rollbar.info("html file served successfully");
    rollbar.error("this endpoint doesn't exist");
    rollbar.warning("endpoint does not exits");
    rollbar.critical("Crash while trying to reach endpoint");
});

app.get("/devMountain", (req, res) => {
    rollbar.info("user visited devMountain website");
    console.log("/devMountain endpoint hit");
    res.status(200).send("Nice job visiting devMountain website");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started listening on ${port}`)
});