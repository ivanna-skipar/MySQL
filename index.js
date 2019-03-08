const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'remotemysql.com',
  user     : 'fW8VOkrTuV',
  password : 'YOEsvfpmjm',
  database : 'fW8VOkrTuV'
});

connection.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
});

let firstName = 'Vasil';
let lastname = 'Bib';
let registration_date = '2015-04-11';
let job_title = 'Engineer';

connection.query(`INSERT into employees_Skipar (firstname, lastname, registration_date, job_title) values ('${firstName}', '${lastname}', '${registration_date}', '${job_title}')`, function (error, results) {
    if (error){
        console.log('Can not insert');
        return;
    }
    console.log('INSERT', results);
});    

connection.query(`SELECT * from employees_Skipar WHERE firstName = '${firstName}' `, function (error, results) {
    if (error){
        console.log('Can not select');
        return;
    }
    console.log('SELECT', results);
});

connection.query(`DELETE from employees_Skipar WHERE firstName = '${firstName}' && id > 10 `, function (error, results) {
    if (error){
        console.log('Can not delete');
        return;
    }
    console.log('DELETE', results);
});

connection.query(`UPDATE employees_Skipar SET job_title = 'Office manager' WHERE firstName = '${firstName}' `, function (error, results) {
    if (error){
        console.log('Can not UPDATE');
        return;
    }
    console.log('UPDATE', results);
});

connection.query('SELECT * from employees_Skipar', function (error, results) {
    if (error){
        console.log('Can not select');
        return;
    }
    console.log('SELECT', results);
});