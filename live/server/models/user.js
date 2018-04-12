
'use strict';
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    user_name: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
  });

  User.associate = (models) => {
     User.hasMany(models.Dashboard, {
      foreignKey: 'user',
      as: 'Dashboards',
     });
  }
  return User;
};
