import pg from 'pg';
import * as dotenv from 'dotenv';
dotenv.config();

export { query };

const { Pool } = pg;
const pool = new Pool();

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

function query(text, param){
    if (param === undefined) { return pool.query(text); }
    else { return pool.query(text, param); }
};