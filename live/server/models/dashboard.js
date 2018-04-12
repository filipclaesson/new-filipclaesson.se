'use strict';
module.exports = function(sequelize, DataTypes) {
  const Dashboard = sequelize.define('Dashboard', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
  });


  Dashboard.associate = (models) => {
    Dashboard.belongsTo(models.User, {
      foreignKey: 'user',
      onDelete: 'CASCADE',
    });
  };

  Dashboard.associate = (models) => {
     Dashboard.hasMany(models.DashboardItem, {
      foreignKey: 'dashboard',
      as: 'DashboardItems',
     });
  }


  return Dashboard;
};
