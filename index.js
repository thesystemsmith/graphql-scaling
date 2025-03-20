import { port } from './config/environment';
import app from './app';
import connectDB from './db';

const start = async () => {
  try {
    console.log('🔄 Connecting to database...');
    await connectDB();
    console.log('✅ Connected to database');

    app.listen(port, () => {
      console.log(`🚀 GraphQL server running at http://localhost:${port}/graphql`);
    });
  } catch (error) {
    console.error(`❌ Not able to run GraphQL server. Error: ${error.message}`);
  }
};

start();
