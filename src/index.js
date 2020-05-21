const express = require("express");
const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//middleware
app.use(express.json());
//routing
app.use("/api", require("./routes/jobs.js"));
//Starting the server.

app.listen(app.get("port"), (req, res) => {
  console.log("Listening on port", app.get("port"));
});
