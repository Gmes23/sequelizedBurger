'use strict':

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('burgers', [
      {
        burger_name: "american double cheese burger"
      },
      {
        burger_name: "spicy chicken burger"
      },
      {
        burger_name: "really mean burger"
      }
    ])
  }
  down: function (queryInterface, Sequelize) {
    
  }
}
