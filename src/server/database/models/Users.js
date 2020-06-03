'use strict';

const Sequelize = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
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
  }, {});

  Users.associate = (models) => {
    Users.hasMany(models.Auths, {onDelete: 'CASCADE'});
    Users.hasMany(models.Emails, {onDelete: 'CASCADE'});
  };

  return Users;
};

