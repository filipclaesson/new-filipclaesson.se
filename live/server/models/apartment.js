'use strict';
module.exports = function(sequelize, DataTypes) {
  var Apartment = sequelize.define('Apartment', {
    published: DataTypes.DATE,
    published_week: DataTypes.DATE,
    published_month: DataTypes.DATE,
    sold_date: DataTypes.DATE,
    sold_week: DataTypes.DATE,
    sold_month: DataTypes.DATE,
    object_type: DataTypes.STRING,
    living_area: DataTypes.DOUBLE,
    list_price: DataTypes.DOUBLE,
    sqm_list_price: DataTypes.DOUBLE,
    sold_price: DataTypes.DOUBLE,
    sqm_sold_price: DataTypes.DOUBLE,
    location_from_geo: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Apartment;
};