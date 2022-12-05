import { Pool } from 'pg';

const pool = new Pool();

function query(text, param){
    if (param === undefined) { pool.query(text); }
    else { pool.query(text, param); }
};

module.exports = {
    query
};