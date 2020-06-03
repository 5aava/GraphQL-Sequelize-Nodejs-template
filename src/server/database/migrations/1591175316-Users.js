'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.createTable('Users', {
        id: {
          type: Sequelize.BIGINT,
          autoIncrement: true,
          primaryKey: true,
        },
        name: Sequelize.STRING,
        email:  {
          type: Sequelize.STRING,
          validate: {
            isEmail: true,
          },
        },
        ip: {
          type: Sequelize.STRING,
          validate: {
            isIP: true,
          },
        },
        isEmail: Sequelize.BOOLEAN,
        isSubscribe: Sequelize.BOOLEAN,
        referral: Sequelize.STRING,

        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        deletedAt: Sequelize.DATE,
      }),

      queryInterface.createTable('Auths', {
        id: {
          type: Sequelize.BIGINT,
          autoIncrement: true,
          primaryKey: true,
        },
        type: Sequelize.STRING,
        userId: {
          type: Sequelize.BIGINT,
          onDelete: 'CASCADE',
          references: {
            model: 'Users',
            key: 'id',
          },
        },
        password: Sequelize.STRING,

        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        deletedAt: Sequelize.DATE,
      }),

      queryInterface.createTable('Emails', {
        id: {
          type: Sequelize.BIGINT,
          autoIncrement: true,
          primaryKey: true,
        },
        userId: {
          type: Sequelize.BIGINT,
          onDelete: 'CASCADE',
          references: {
            model: 'Users',
            key: 'id',
          },
        },
        params: Sequelize.JSON,

        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        deletedAt: Sequelize.DATE,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.dropTable('Auths'),
      queryInterface.dropTable('Emails'),
      queryInterface.dropTable('Users'),
    ]);
  },
};
