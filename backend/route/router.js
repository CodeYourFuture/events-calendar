const express = require("express");
const router = express.Router();
const events = require("../data/events");

// router.get("/", (req, res) => {
//   res.send("it is working");
// });

router.get("/", (req, res) => {
  res.json(events);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  let result = events.filter(item => item.id === id);
  res.json(result);
});

router.post("/", (req, res) => {
  console.log("Handeling post request");
  res.end();
});

router.put("/", (req, res) => {
  console.log("Handeling post request");
  res.end();
});

router.delete("/", (req, res) => {
  console.log("Handeling post request");
  res.end();
});

router.get("/", (req, res) => {
  res.json(events);
});
// router.get(`${EVENTS_BASE_URL}/:id`, (req, res) => {
//   const id = req.params.id;
//   let result = events.filter(item => item.id === id);
//   res.json(result);
// });

module.exports = router;
