const express = require("express");
const router = express.Router();
const events = require('../events.json')
router.get("/home", (req, res) => {
  res.send("it is working");
});

//
// router.post("/addingFloaters", function(req, res) {
//   const data = req.body;
//   // var dataCa = {
//   //   class_id: "${data.class_id}",
//   //   floater_id: "${data.floater_id}",
//   //   first_name: "${data.first_name}",
//   //   surname: "${data.surname}",
//   //   email: "${data.email}"
//   // };
//   const sql = `insert into floaters (class_id, floater, room_id, first_name, surname, eamil) values
//    ('${data.class_id}', '${data.floater}', '${data.first_name}', '${
//     data.surname
//     }','${data.eamil}')`;
//   db.all(sql, [], (err, row) => {
//     if (err) {
//       console.log("ERROR fetching from the database:", err);
//       return;
//     }
//     console.log("Request succeeded, new data fetched", data);
//     res.status(200).json(data);
//   });
// });

module.exports = router;
