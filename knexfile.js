const config = require('./app/config/config.js');

const dbConfig = {
    client: 'mysql',
    connection: config.mysql.connection,
    pool: config.mysql.pool,
    migrations: {
        tableName: 'migrations'
    },
    seeds: {
        directory: './seeds/'
    }
};

/**
 * Database settings.
 *
 * Setting the db settings in knexfile allows us to make use of the migrations.
 *
 * @type {Object} Database settings
 */
module.exports = dbConfig;
