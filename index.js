var bodyParser = require("body-parser");
const express = require("express");
const { create } = require("lodash");
const app = express();
 
const { User } = require("./models");
const userRoutes=require("./routes/user.js");

app.use(bodyParser.json());
app.use('',userRoutes);



User.sequelize.sync().then((req) => {
  app.listen(3000, () => {
    console.log("server listening");
  });
});