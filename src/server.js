require("dotenv").config();
const app = require("./app.js");

const connectDB = require("../src/config/db-connect.js");
const PORT = process.env.PORT || 8000;

connectDB();

app.listen(PORT, () => {
  console.log(`server is running on port no ${PORT}`);
});
