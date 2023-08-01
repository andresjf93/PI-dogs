const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "dog",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
      
        
       
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true, 
        defaultValue: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-57350310-64884f6c47965.jpg"
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return JSON.parse(this.getDataValue('height'))
        },
        set(value) {
          this.setDataValue('height', JSON.stringify(value))
        }
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return JSON.parse(this.getDataValue('weight'))
        },
        set(value) {
          this.setDataValue('weight', JSON.stringify(value))
        }
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
