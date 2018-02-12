'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Metrics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      user: {
        type: Sequelize.BIGINT
      },
      locations: {
        type: Sequelize.STRING
      },
      group: {
        type: Sequelize.STRING
      },
      aggrigation_type: {
        type: Sequelize.STRING
      },
      aggrigation: {
        type: Sequelize.STRING
      },
      low_sqm: {
        type: Sequelize.DOUBLE
      },
      high_sqm: {
        type: Sequelize.DOUBLE
      },
      low_date: {
        type: Sequelize.DATE
      },
      high_date: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('Metrics');
  }
};