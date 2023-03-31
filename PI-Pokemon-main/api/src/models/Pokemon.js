const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      },
 name:{
  type: DataTypes.STRING,
  allowNull:false,
  unique:true
 },
 imagen:{
 type:DataTypes.TEXT,
 allowNull:false
 },
 hp:{
   type:DataTypes.INTEGER,
   allowNull:false,
 },
 attack:{
   type:DataTypes.INTEGER,
   allowNull:false,
 },
 defense:{
   type:DataTypes.INTEGER,
   allowNull:false,
 },
 speed:{
   type:DataTypes.INTEGER,
 },
 weight:{
   type:DataTypes.STRING,
 },
 height:{
  type:DataTypes.STRING,
 }
 
  });
};
