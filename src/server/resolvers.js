export default {
  User: {
    auth: (parent, args, context, info) => parent.getAuths(),
  },
  Auth: {
    user: (parent, args, context, info) => parent.getUser(),
  },
  Query: {
    auths: (parent, args, { db }, info) => db.Auths.findAll(),
    users: (parent, args, { db }, info) => db.Users.findAll(),
    auth: (parent, { id }, { db }, info) => db.Auths.findByPk(id),
    user: (parent, { id }, { db }, info) => db.Users.findByPk(id),
  },
  Mutation: {
    createAuth: (parent, { title, content, userId }, { db }, info) =>
      db.Auths.create({
        title: title,
        content: content,
        userId: userId,
      }),
    updateAuth: (parent, { title, content, id }, { db }, info) =>
      db.Auths.update({
        title: title,
        content: content,
      },
      {
        where: {
          id: id,
        },
      }),
    deleteAuth: (parent, {id}, { db }, info) =>
      db.Auths.destroy({
        where: {
          id: id,
        },
      }),
  },
};

