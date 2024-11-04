import { getClient } from "./utils";
async function createTable() 
{
    const client =await getClient();
    const createUserTableQuery=`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            email VARCHAR(250) UNIQUE NOT NULL,
            password VARCHAR(250) NOT NULL
        )
    
    `;
    await client.query(createUserTableQuery)

    const createTodosQuery =`
        CREATE TABLE todos(
            id SERIAL PRIMARY KEY,
            title NOT NULL TEXT,
            description TEXT,
            user_id INTEGER REFERENCES users(id),
            done BOOLEAN DEFAULT FALSE
        )
    `;
    await client.query(createTodosQuery)
    console.log("Table created successfully!");
    
}
createTable();