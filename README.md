# anthology-api
## Overview
API server built with Express (Nodejs). Created to facilitate user interactions
between a PostgreSQL database and a React frontend.

Part of Anthology, a project that enables user access to communal databases with
the intent of having easily retrievable excerpts of books, poems, lyrics, and
information. 

## Setup
1. [Setup PostgreSQL server](https://www.postgresql.org/files/documentation/pdf/15/postgresql-15-A4.pdf)
on host machine.

## Usage
1. Clone this repository
2. cd to root directory of project in a terminal
3. Create a file named `.env` in this project's root directory. Occupy with the following environment variables relating to the 
Postgres database:
```
PGHOST=<host machine name>
PGUSER=<postgres username>
PGDATABASE=<database name>
PGPASSWORD=<postgres password>
PGPORT=<port number for postgres server>
```
4. Call `npm install` to install `node_modules`
5. For a development server, call `npm run dev`. To run the server, call
`npm start` 