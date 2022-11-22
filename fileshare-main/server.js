const express = require("express");
const app = express();
const path = require("path");
var expressLayouts = require("express-ejs-layouts");


const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + "/public"));
app.use(express.json());
const connectDB = require("./config/db");
connectDB();
app.set("view engine", "ejs");
//routes
app.use("/api/files", require("./routes/files"));
app.use("/files/download", require("./routes/download"));
app.use("/files", require("./routes/show"));

console.log(__dirname);

app.get("/", function (req, res) {
  console.log("hello");
  
  res.sendFile(__dirname + "/public/login.html");
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
