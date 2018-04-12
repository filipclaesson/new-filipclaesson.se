'use strict';
module.exports = function(sequelize, DataTypes) {
  const Setting = sequelize.define('Setting', {
    key: {
      type: DataTypes.STRING
    },
    value: {
      type: DataTypes.STRING
    }
  });
  Setting.associate = (models) => {
    Setting.belongsTo(models.DashboardItem, {
      foreignKey: 'dashboard_item',
      onDelete: 'CASCADE',
    });
  };
  return Setting;
};
