'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('DashboardItems', [{
        id: 1,
        name: 'Innerstan Prices',
        description: 'Metric which holds 3 months of innerstan apartment data',
        item_type: 'graph',
        createdAt: new Date(),
        updatedAt: new Date(),
        dashboard: 1
      }], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('DashboardItems', null, {});
  }
};
