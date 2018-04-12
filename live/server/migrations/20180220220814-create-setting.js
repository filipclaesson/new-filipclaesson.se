'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Settings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      key: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      dashboard_item: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'DashboardItems',
          key: 'id',
          as: 'dashboard_item',
        },
      },
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Settings');
  }
};