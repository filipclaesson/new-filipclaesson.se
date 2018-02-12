'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Apartments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      published: {
        type: Sequelize.DATE
      },
      published_week: {
        type: Sequelize.DATE
      },
      published_month: {
        type: Sequelize.DATE
      },
      sold_date: {
        type: Sequelize.DATE
      },
      sold_week: {
        type: Sequelize.DATE
      },
      sold_month: {
        type: Sequelize.DATE
      },
      object_type: {
        type: Sequelize.STRING
      },
      living_area: {
        type: Sequelize.DOUBLE
      },
      list_price: {
        type: Sequelize.DOUBLE
      },
      sqm_list_price: {
        type: Sequelize.DOUBLE
      },
      sold_price: {
        type: Sequelize.DOUBLE
      },
      sqm_sold_price: {
        type: Sequelize.DOUBLE
      },
      location_from_geo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Apartments');
  }
};