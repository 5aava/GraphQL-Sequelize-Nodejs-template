import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';
import db from './database/models';


const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db },
});

const app = express();
server.applyMiddleware({ app });

app.use(express.static('public'));

db.sequelize.sync().then(() => {
  // populate author table with dummy data

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://127.0.0.1:4000${server.graphqlPath}`),
  );
});


export default app;
