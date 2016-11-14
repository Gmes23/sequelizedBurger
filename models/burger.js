'use strict';
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define('burger', {
    burger_name: {
      type: DataTypes.STRING,
      unique: true,
      notNull: true,
      is: ["^[a-z]+$",'i'],
      isAlphanumeric: true,
    },
    devoured: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        burger.sync(models)
      },
    }
  });
  return burger;
};
