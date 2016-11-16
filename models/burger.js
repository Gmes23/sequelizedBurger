'use strict';
var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define('burgers', {
      burger_name: {
        type: DataTypes.STRING,
        unique: true,
        notNull: true,
        is: ["^[a-z]+$",'i'],
        isAlphanumeric: true
      },
     devoured: {
       type: DataTypes.BOOLEAN,
       defaultValue: 0
     },
  }, {
    timestamps: false
  });
  return burger;
};
