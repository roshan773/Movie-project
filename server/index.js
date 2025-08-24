const express = require("express");
require("dotenv").config();
const userrouter = require("./routes/user.route");
const movieRouter = require("./routes/movie.route")
const connectToDb = require("./db/db");
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cookieParser())

const cors = require('cors');
app.use(cors({
  origin: [
    "https://movie-project-w6i4.onrender.com/",
  ],
  credentials: true
}));


app.get("/", (req, res) => {
  res.send("✅ API is running! Try /auth or /movie routes.");
});
app.use("/auth", userrouter);
app.use("/movie", movieRouter);


app.listen(port, async () => {
  try {
    await connectToDb();
    console.log("Server is running on port " + port);
  } catch (error) {
    console.log("Error connecting to the database:", error);
  }
});
