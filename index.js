const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());



app.get("/", (req, res) => {
  res.json(
    message =  "hello this is sserver 2 on port 8081"
  )
})


app.listen(8081)