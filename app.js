import express from 'express';
import graphqlServer from './graphql';

const app = express();

async function startGraphQLServer() {
    await graphqlServer.start(); // Ensure server starts before applying middleware
    graphqlServer.applyMiddleware({ app });
}

startGraphQLServer()
    .then(() => console.log('🚀 GraphQL middleware applied successfully'))
    .catch(error => console.error('❌ Error starting GraphQL server:', error));

export default app;