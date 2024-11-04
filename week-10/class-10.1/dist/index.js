"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
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
// Async function to insert data into a table
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://neondb_owner:Mk1Zlgxn2pwL@ep-fragrant-credit-a8iqrlpc.eastus2.azure.neon.tech/neondb?sslmode=require"
        });
        try {
            yield client.connect(); // Ensure client connection is established
            const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
            const res = yield client.query(insertQuery);
            console.log('Insertion success:', res); // Output insertion result
        }
        catch (err) {
            console.error('Error during the insertion:', err);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
insertData();
