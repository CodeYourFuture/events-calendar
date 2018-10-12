const express = require("express");
const app = express();
const router = require("./route/router");

<<<<<<< HEAD
app.use("/", router);
app.listen(process.env.PORT || 3001, function() {
  console.log("Server is listening on port 3001. Ready to accept requests!");
=======





app.use("/", router)
app.listen(process.env.PORT || 3001, function () {
    console.log("Server is listening on port 3001. Ready to accept requests!");
>>>>>>> 37f16359ddb1026c07767b6bd6ac8a479ce30fec
});

