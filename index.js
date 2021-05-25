const { ApolloServer, gql } = require("apollo-server");
const { RandomUserDataSource } = require("./random-user-datasource");

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: async (_, {}, { dataSources }) => {
      await dataSources.googleDataSource.load();
      await dataSources.googleDataSource.load();
      await dataSources.googleDataSource.load();
      await dataSources.googleDataSource.load();
      await dataSources.googleDataSource.load();
      await dataSources.googleDataSource.load();
      await dataSources.googleDataSource.load();
      await dataSources.googleDataSource.load();
      await dataSources.googleDataSource.load();
      await dataSources.googleDataSource.load();
      await dataSources.googleDataSource.load();
      await dataSources.googleDataSource.load();
      await dataSources.googleDataSource.load();
      await dataSources.googleDataSource.load();
      await dataSources.googleDataSource.load();
      await dataSources.googleDataSource.load();
      return "world";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    googleDataSource: new RandomUserDataSource(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
