const mysql = require('mysql');

const { MYSQL_CONFIG } = require('./config');

const connection = mysql.createConnection(MYSQL_CONFIG);
connection.connect((error) => {
  if (error) {
    console.error('error connecting: ' + error.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

/**
 *
 * @param {string} sql
 * @returns
 */
function runingSql(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports.runingSql = runingSql;
