const express = require("express");
const cors = require("express");
require("dotenv").config();

const app = express();
// var whitelist = ["http://localhost:3000"];
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };
app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//   console.log(req.headers);
//   // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://test-app-lyart-two.vercel.app"
//   );
//   // res.header(
//   //   "Access-Control-Allow-Headers",
//   //   "Origin, X-Requested-With, Content-Type, Accept"
//   // );
//   next();
// });

app.get("/", (req, res) => {
  return res.send({
    data: "connected to backend",
    // origine: req.headers.origin,
    status: true,
  });
});
app.get("/posting", (req, res) => {
  return res.send({
    data: "connected to backend again",
    origine: req.headers.origin,
    status: true,
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listinig on port ${port}`);
});
