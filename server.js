const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req,res) => {
    console.log('response from sir Antonio computer: ' + req.ip);
    res.send('response from sir Antonio computer: ' + req.ip);
})


app.listen(port, () => console.log('Server app listening on port ' + port));