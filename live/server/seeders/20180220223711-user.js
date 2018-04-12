'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Users', [{
        id: 1,
        user_name: 'fille',
        name: 'Filip Claesson',
        email: 'filcl133@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        user_name: 'julia',
        name: 'Julia Ångman',
        email: 'filipclaesson87@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
