// backend/db.js
import { sql } from '@vercel/postgres';

const sql = createPool({ connectionString: process.env.POSTGRES_URL });

export default sql;
