const { User } = require("../models");
exports.getuser = (req, res) => {
  User.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.createnewuser = async (req, res) => {
  try {
    const { firstName, age } = req.body;
    await User.create({
      firstName: firstName,
      age: age,
    });
    res.send("insert");
  } catch (err) {
    console.log(err);
  }
};
exports.updateuser = async (req, res) => {
  try {
    let {id} = req.params;
    let foundid = await User.findByPk(id);
    if (!foundid) {
      res.send("THE ID YOU HAVE ENTERED IS NOT EXISTS");
    } else{
    const { firstName, age } = req.body;
    await User.update(
      {
        firstName: firstName,
        age: age,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.json({
      message: "updated",
    })};
  } catch (error) {
    console.log(error);
  }
};

exports.deleteuser = async (req, res) => {
  try {
    let {id} = req.params;
    let foundid = await User.findByPk(id);
    if (!foundid) {
      res.send("THE ID YOU HAVE ENTERED IS NOT EXISTS");
    } else{
      await User.destroy({
        where: {
          id: id,
        },
      });
    res.send("delete");}
  } catch (error) {
    console.log(error);
  }
};