require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const PORT = process.env.PORT || 3500;

console.log(process.env.NODE_ENV);

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// root routing and css
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", require("./routes/root"));

// API routing
app.use("/hotelDetails", require("./routes/hotelDetails"));
app.use("/hotelData", require("./routes/hotelData"));

// catch all route to transfer any unknown routes to 404 page
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.listen(PORT, () => {
  console.log(
    `Click link to go to api: http://localhost:${PORT}\nServer Running on port: ${PORT}`
  );
});
