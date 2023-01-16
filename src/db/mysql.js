const mysql = require('mysql');
const {MYSQL_CONFIG} = require('../config/db')
// 创建连接对象
const connection = mysql.createConnection(MYSQL_CONFIG);

// 开始连接
connection.connect();

// 执行sql语句
// const sql = `update blogs set title = '标题9' where content = '内容1';`;
// connection.query(sql, (err, result) => {
//     if(err) {
//         console.log('error',err)
//         return;
//     }
//     console.log('result', result);
// })

// 执行sql语句
// function execSQL(sql, callback) {
//     connection.query(sql, callback);
// }

function execSQL(sql) {
    const promise = new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if(err) {
                reject(err);
                return;
            }
            resolve(result);
        })
    });

    return promise;
}
module.exports = {
    execSQL
}