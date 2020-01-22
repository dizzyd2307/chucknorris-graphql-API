const { ApolloServer, gql } = require('apollo-server');
const { fetch } = require('cross-fetch');
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = gql`

#Joke Type thate defines the fetch according to Category

type Joke{
    icon_url: String
    id: String
    url: String
    value: String
}

type Query {
  categories: [String],
  joke(category: ID!): Joke
}
`;

//URL for Chuck Norris API
const baseURL = `https://api.chucknorris.io/jokes/`;

const resolvers = {
    Query:{
        categories: () =>{
            return fetch(`${baseURL}categories`).then(res => res.json())
        },
        joke: (parent, args) =>{
            const { category } = args
            return fetch(`${baseURL}random?category=${category}`).then(res => res.json())
        }
    }
  };

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
