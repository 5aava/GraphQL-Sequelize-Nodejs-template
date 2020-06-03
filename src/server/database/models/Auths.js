'use strict';

const Sequelize = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const Auths = sequelize.define('Auths', {
    id: {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.BIGINT,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    password: Sequelize.STRING,

    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE,
  }, {});

  Auths.associate = models => {
    Auths.belongsTo(models.Users, {foreignKey: 'userId'});
  };


  return Auths;
};
