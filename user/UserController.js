var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var User = require("./User");

//添加这部分
//创建一个新用户
router.post("/", (req, res) => {
  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    },
    (err, user) => {
      if (err)
        return res
          .status(500)
          .send("There was a problem adding the information to the database.");
      res.status(200).send(user);
    }
  );
});

//返回数据库中的所有数据
router.get("/", (req, res) => {
  User.find({}, (err, users) => {
    if (err)
      return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(users);
  });
});

module.exports = router;
