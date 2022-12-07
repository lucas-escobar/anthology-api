import pg from 'pg';
import * as dotenv from 'dotenv';
dotenv.config();

export { query };

const { Pool } = pg;
const pool = new Pool();

function query(text, param){
    if (param === undefined) { pool.query(text); }
    else { pool.query(text, param); }
};