'use strict';
module.exports = function(sequelize, DataTypes) {
  var Metric = sequelize.define('Metric', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    user: DataTypes.BIGINT,
    locations: DataTypes.STRING,
    group: DataTypes.STRING,
    aggrigation_type: DataTypes.STRING,
    aggrigation: DataTypes.STRING,
    low_sqm: DataTypes.DOUBLE,
    high_sqm: DataTypes.DOUBLE,
    low_date: DataTypes.DATE,
    high_date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Metric;
};