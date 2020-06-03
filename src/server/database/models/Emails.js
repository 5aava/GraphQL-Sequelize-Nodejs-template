'use strict';

const Sequelize = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const Emails = sequelize.define('Emails', {
    id: {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.BIGINT,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    params: Sequelize.JSON,

    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE,
  }, {});
  Emails.associate = models => {
    Emails.belongsTo(models.Users, {foreignKey: 'userId'});
  };
  return Emails;
};
