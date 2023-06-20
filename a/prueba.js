/*Conexión: Oracle DB en MV VirtualBox con usuario hr

const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

if (process.platform === 'win32') { //indicando la ubicacion del oracleclient
  try {
    oracledb.initOracleClient({libDir: 'C:\\instantclient_21_9'});   // note the double backslashes
  } catch (err) {
    console.error('Whoops!');
    console.error(err);
    process.exit(1);
  }
}

async function fun(){
    let con;

      try{
        con = await oracledb.getConnection({
            user:"hr",
            password:"oracle1",
            connectString: "192.168.1.8/orclpdb1.0.2.15"
        })
        const data = await con.execute(
            'SELECT * FROM melodia_interprete',
        );
        console.log(data.rows);



        //console.log(data.rows);
      }catch(err){
        console.error(err);
      }
}
fun();*/


/* Conexión: Oracle DB en MV en Oracle Cloud con usuario C##ADMIN

const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

if (process.platform === 'win32') { //indicando la ubicacion del oracleclient
  try {
    oracledb.initOracleClient({libDir: 'C:\\instantclient_21_9'});   // note the double backslashes
  } catch (err) {
    console.error('Whoops!');
    console.error(err);
    process.exit(1);
  }
}

async function fun(){
    let con;

      try{
        con = await oracledb.getConnection({
            user:"C##ADMIN",
            password:"oracle1",
            connectString: "129.146.9.181:1521/orcl"
        })
        console.log("Conectado a la DB");

        const data = await con.execute(
            'SELECT * FROM DICT',
        );
        console.log(data.rows);
      }catch(err){
        console.error(err);
      }
}
fun();
*/

//Conexión: Oracle DB en MV en Oracle Cloud con usuario JORGE

const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

if (process.platform === 'win32') { //indicando la ubicacion del oracleclient
  try {
    oracledb.initOracleClient({libDir: 'C:\\instantclient_21_9'});   // note the double backslashes
  } catch (err) {
    console.error('Whoops!');
    console.error(err);
    process.exit(1);
  }
}

async function fun(){
    let con;

      try{
        con = await oracledb.getConnection({
          user:"JORGE",
          password:"oracle1",
          connectString: "129.146.9.181:1521/project"
        })
        console.log("Conectado... a la DB");
        const data = await con.execute(
            'SELECT * FROM  INTERPRETE',
        );
        console.log(data.rows);



        //console.log(data.rows);
      }catch(err){
        console.error(err);
      }
}
fun();
