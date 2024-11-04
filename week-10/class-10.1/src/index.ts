import { Client } from "pg";
// const client = new Client({
//     connectionString:"postgresql://neondb_owner:Mk1Zlgxn2pwL@ep-fragrant-credit-a8iqrlpc.eastus2.azure.neon.tech/neondb?sslmode=require"
// }) 


// async function createUserTable(){
//    await client.connect()

//     const result = await client.query(`
//         CREATE TABLE users(
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(50) UNIQUE NOT NULL,
//         email VARCHAR(255) NOT NULL,
//         password VARCHAR(255) NOT NULL,
//         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP)
//         `);
//         console.log(result);
        
// }

// createUserTable();
// postgresql://neondb_owner:Mk1Zlgxn2pwL@ep-fragrant-credit-a8iqrlpc.eastus2.azure.neon.tech/neondb?sslmode=require
// postgresql://username:password@ep-broken-frost-69135494.us-east-2.aws.neon.tech/calm-gobbler-41_db_2253874

// // Async function to insert data into a table
// async function insertData() {
//   const client = new Client({
//   connectionString:"postgresql://neondb_owner:Mk1Zlgxn2pwL@ep-fragrant-credit-a8iqrlpc.eastus2.azure.neon.tech/neondb?sslmode=require"
//   });

//   try {
//     await client.connect(); // Ensure client connection is established
//     const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
//     // problem with this approach is "delete * users" instead of "username" it will understand it as sql query
//     const res = await client.query(insertQuery);
//     console.log('Insertion success:', res); // Output insertion result
//   } catch (err) {
//     console.error('Error during the insertion:', err);
//   } finally {
//     await client.end(); // Close the client connection
//   }
// }

// insertData();

// Async function to insert data into a table
async function insertData(username: string, email: string, password: string) {
    const client = new Client({
        connectionString:"postgresql://neondb_owner:Mk1Zlgxn2pwL@ep-fragrant-credit-a8iqrlpc.eastus2.azure.neon.tech/neondb?sslmode=require"
        });

  try {
    await client.connect(); // Ensure client connection is established
    // Use parameterized query to prevent SQL injection
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
insertData('username5', 'user5@example.com', 'user_password').catch(console.error);