import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as schema from "./schema";

// for migrations
const queryClient = postgres(process.env.DATABASE_URL, { max: 1 });

// for query purposes
// use connection string from env variable for next.js

export const db = drizzle(queryClient, { schema });

migrate(db, { migrationsFolder: "migrations" });
