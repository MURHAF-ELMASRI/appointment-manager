import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as schema from './schema';
// for migrations
// const migrationClient = postgres("postgres://postgres:adminadmin@0.0.0.0:5432/db", { max: 1 });
// migrate(drizzle(migrationClient),{migrationsFolder: 'migrations'})

// for query purposes
// use connection string from env variable for next.js
const queryClient = postgres(process.env.DATABASE_URL, { max: 1 });
export const db = drizzle(queryClient, {schema});
// await db.select().from()

