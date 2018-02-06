'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('User', {
    user_name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Users;
};