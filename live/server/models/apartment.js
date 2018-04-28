'use strict';
module.exports = function(sequelize, DataTypes) {
  const Apartment = sequelize.define('Apartment', {
    // id: {
    //   type: DataTypes.STRING
    // },
    published: {
      type: DataTypes.DATE
    },
    published_week: {
      type: DataTypes.DATE
    },
    published_month: {
      type: DataTypes.DATE
    },
    sold_date: {
      type: DataTypes.DATE
    },
    sold_week: {
      type: DataTypes.DATE
    },
    sold_month: {
      type: DataTypes.DATE
    },
    object_type: {
      type: DataTypes.STRING
    },
    living_area: {
      type: DataTypes.DOUBLE
    },
    list_price: {
      type: DataTypes.DOUBLE
    },
    sqm_list_price: {
      type: DataTypes.DOUBLE
    },
    sold_price: {
      type: DataTypes.DOUBLE
    },
    sqm_sold_price: {
      type: DataTypes.DOUBLE
    },
    area_from_geo: {
      type: DataTypes.STRING
    },

  });
  return Apartment;
};
