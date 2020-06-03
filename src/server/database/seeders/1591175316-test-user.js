let UsersArray = [
  {
    name: 'John', email: 'demo@demo.com', ip: '10.0.0.10', isEmail: null, isSubscribe: null,
    referral: null, createdAt: new Date(), updatedAt: new Date(), deletedAt: null,
  },
  {
    name: 'Ivan', email: 'ivan@demo.com', ip: '10.0.0.10', isEmail: null, isSubscribe: null,
    referral: null, createdAt: new Date(), updatedAt: new Date(), deletedAt: null,
  },
  {
    name: 'Phil', email: 'phil@demo.com', ip: '10.0.0.10', isEmail: null, isSubscribe: null,
    referral: null, createdAt: new Date(), updatedAt: new Date(), deletedAt: null,
  },
];

let AuthArray = [
  {
    type: 'local', userId: 1, password: '$2b$12$x8Y16SgWxlEhshdTDF8XbO/1RtbVcrzbCzdqjLfKE2iDx71EOiZ2a', // testtest
    createdAt: new Date(), updatedAt: new Date(), deletedAt: null,
  },
  {
    type: 'local', userId: 2, password: '$2b$12$x8Y16SgWxlEhshdTDF8XbO/1RtbVcrzbCzdqjLfKE2iDx71EOiZ2a', // testtest
    createdAt: new Date(), updatedAt: new Date(), deletedAt: null,
  },
  {
    type: 'local', userId: 3, password: '$2b$12$x8Y16SgWxlEhshdTDF8XbO/1RtbVcrzbCzdqjLfKE2iDx71EOiZ2a', // testtest
    createdAt: new Date(), updatedAt: new Date(), deletedAt: null,
  },
];


module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('Users', UsersArray, {}),
      queryInterface.bulkInsert('Auths', AuthArray, {}),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete('Auths', null, {}),
      queryInterface.bulkDelete('Users', null, {}),
    ]);
  },
};
