module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      firstName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    });
  
    return User;
  };