'use strict';
module.exports = function(sequelize, DataTypes) {
  const DashboardItem = sequelize.define('DashboardItem', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    item_type: {
      type: DataTypes.STRING
    }
  });



  DashboardItem.associate = (models) => {
    DashboardItem.belongsTo(models.Dashboard, {
      foreignKey: 'dashboard',
      onDelete: 'CASCADE',
    });
  };

  DashboardItem.associate = (models) => {
     DashboardItem.hasMany(models.Setting, {
      foreignKey: 'dashboard_item',
      as: 'Settings'
     });
  }
  
  return DashboardItem;
};



