'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      updateAt: {
        devoured: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false
        },
      }

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};