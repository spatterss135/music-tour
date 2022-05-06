'use strict';

const bandInfo = [
  {
    name: 'Lady Gaga',
    genre: 'Pop',
    available_start_time: new Date(1995, 11, 17),
    end_time: new Date()
  },
  {
    name: 'Tupac',
    genre: 'Rap',
    available_start_time: new Date(1945, 11, 17),
    end_time: new Date()
  },
  {
    name: 'Lil',
    genre: 'Wayne',
    available_start_time: new Date(1595, 11, 17),
    end_time: new Date()
  },
  {
    name: 'Aerosmith',
    genre: 'Rock and/or Roll',
    available_start_time: new Date(1996, 11, 17),
    end_time: new Date()
  },
  {
    name: 'Hells Kittens',
    genre: 'Rock and/or Roll',
    available_start_time: new Date(1905, 11, 17),
    end_time: new Date()
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('bands', bandInfo, {})
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
