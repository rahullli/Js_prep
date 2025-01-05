const express = require('express'); 
const app = express();
const path = require("path");
const port = 3000;


app.use("/static",express.static(path.resolve(__dirname,"frontend", "static")));
app.get("/*", (req,res)=>{
    res.sendFile(path.resolve("frontend","index.html"));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})