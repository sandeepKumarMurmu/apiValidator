const express = require("express");
const cors = require("express");
require("dotenv").config();

const app = express();
// const corsOption = {
//   origin: "https://test-app-lyart-two.vercel.app",
// };s
// app.use(express.json());
// app.use(cors(corsOption));

// app.get("/", (req, res) => {
//   return res.send({
//     data: "connected to backend",
//     origine: req.headers.origin,
//     status: true,
//   });          
// });
// app.get("/posting", (req, res) => {
//   return res.send({
//     data: "connected to backend again",
//     origine: req.headers.origin,
//     status: true,
//   });
// });

console.log(require("./src/routes/index")())
app.use("/api", require("./src/routes/index"));

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listinig on port ${port}`);
});
