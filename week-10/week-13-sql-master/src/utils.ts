import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://neondb_owner:fEMy12ksPXig@ep-royal-water-a8uthxjr.eastus2.azure.neon.tech/neondb?sslmode=require");
    await client.connect();
    return client;
}