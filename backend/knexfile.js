require('dotenv').config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      connectionString: process.env.POSTGRES_URL,
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
      ssl: {
        sslmode: 'prefer', // or 'require', whatever
        sslca: '/path/ca.pem',
        sslkey: '/path/cert.key',
        sslcert: '/path/cert.crt',
        // etc
      },
    },

    migrations: {
      directory: "./db/migrations",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
  production: {
    client: "pg",
    connection: {
      connectionString: process.env.POSTGRES_URL,
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
      ssl: {
        sslmode: 'prefer', // or 'require', whatever
        sslca: '/path/ca.pem',
        sslkey: '/path/cert.key',
        sslcert: '/path/cert.crt',
        // etc
      },
    },

    migrations: {
      directory: "./db/migrations",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
