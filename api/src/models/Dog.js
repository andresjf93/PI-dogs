const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("dog", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    yearsLife: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
