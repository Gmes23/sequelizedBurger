'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('burgers', {
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
    });
  },
  down: function(queryInterface, Sequelize) {

  }
};
