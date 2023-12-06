import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'Ingenieria5704722',
    database: 'tigo'
})