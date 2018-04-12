'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
return queryInterface.bulkInsert('Settings', [{
          key:'locations',
          value:'Gärdet,Östermalm,Vasastan,Kungsholmen,Södermalm',
          createdAt: new Date(),
          updatedAt: new Date(),
          dashboard_item: 1
          },
          {
          key: 'group',
          value: 'sold_week',
          createdAt: new Date(),
          updatedAt: new Date(),
          dashboard_item: 1
          },
          {
          key: 'aggrigation_type',
          value: 'AVG',
          createdAt: new Date(),
          updatedAt: new Date(),
          dashboard_item: 1
          },
          {
          key: 'aggrigation',
          value: 'sqm_sold_price',
          createdAt: new Date(),
          updatedAt: new Date(),
          dashboard_item: 1
          },
          {
          key: 'sqm_low',
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          dashboard_item: 1
          },
          {
          key: 'sqm_high',
          value: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
          dashboard_item: 1
          },
          {
          key: 'range',
          value: '3 months',
          createdAt: new Date(),
          updatedAt: new Date(),
          dashboard_item: 1
          }], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Settings', null, {});

  }
};
