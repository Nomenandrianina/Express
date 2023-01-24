var express = require('express');
var router = express.Router();
let users = require("../data/users");

router.get('/all', function(req, res){
    res.json(users);
});

router.get("/:id", (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    if (found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)));
    } else {
     res.sendStatus(400);
    }
});

//export this router to use in our index.js
module.exports = router;