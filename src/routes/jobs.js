const { Router } = require("express");
const router = Router();
const mysqlConnection = require("../database.js");

//All the jobs
router.get("/", (req, res) => {
  mysqlConnection.query("SELECT * FROM jobs", (err, rows, field) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log("Error", err);
    }
  });
});

//Single job
router.get("/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "SELECT * FROM jobs WHERE id= ?",
    [id],
    (err, rows, field) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log("Error", err);
      }
    }
  );
});

//Post a Job
router.post("/", (req, res) => {
  const { name } = req.body;
  mysqlConnection.query(
    `INSERT INTO jobs(name) VALUES ("${name}")`,
    (err, rows, field) => {
      if (!err) {
        res.json({ Status: "Job Added" });
      } else {
        res.json({ Status: "Error" });
        console.log("Error", err);
      }
    }
  );
});

//Update
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  mysqlConnection.query(
    `UPDATE jobs SET name= "${name}" WHERE id=${id}`,
    (err, rows, fields) => {
      if (!err) {
        res.json({ Status: "Job Updated" });
      } else {
        res.json({ Status: "Error" });
        console.log(err);
      }
    }
  );
});

//Delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    `DELETE FROM jobs WHERE id=${id}`,
    (err, rows, field) => {
      if (!err) {
        res.json({ Status: "Job deleted" });
      } else {
        res.json({ Status: "Error" });
        console.log(err);
      }
    }
  );
});

module.exports = router;
