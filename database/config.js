const { mode } = require('../env');

/**
 * @typedef MySQLConfig
 * @type {object}
 * @property {import("mysql").ConnectionConfig} development - 开发环境配置
 * @property {import("mysql").ConnectionConfig} production - 生产环境配置
 */

/**
 * @type {MySQLConfig}
 */
const MYSQL_CONFIG = {
  development: {
    host: '',
    user: '',
    password: '',
    database: '',
  },

  production: {
    host: '',
    user: '',
    password: '',
    database: '',
  },
};

module.exports.MYSQL_CONFIG = MYSQL_CONFIG[mode];
