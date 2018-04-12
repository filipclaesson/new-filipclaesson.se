'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Dashboards', [{
        name: 'My Dashboard',
        description: 'All my graphs',
        createdAt: new Date(),
        updatedAt: new Date(),
        user: 1
      }], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Dashboards', null, {});
  }
};
