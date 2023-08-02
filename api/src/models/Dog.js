const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "dog",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
        get() {
          return JSON.parse(this.getDataValue("height"));
        },
        set(value) {
          this.setDataValue("height", JSON.stringify(value));
        },
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return JSON.parse(this.getDataValue("weight"));
        },
        set(value) {
          this.setDataValue("weight", JSON.stringify(value));
        },
      },
      life_span: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
