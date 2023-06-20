/*//archivo para definir parametro de conexion

const oracledb = require('oracledb');

async function conexion() {
    try {
        await oracledb.initOracleClient({ libDir: 'C:\\instantclient_21_9' });
        const connection = await oracledb.getConnection({
            user: "JORGE",
            password: "oracle1",
            connectString: "129.146.9.181:1521/project"
        });
        console.log('Conectado a la base de datos Oracle!');
        return connection;
    } catch (error) {
        console.error('Error de conexión:', error);
        throw error;
    }
}

module.exports = conexion;*/
// db.js
// archivo para definir el parámetro de conexión

const oracledb = require('oracledb');

let isOracleClientInitialized = false;

async function conexion() {
    try {
        if (!isOracleClientInitialized) {
            await oracledb.initOracleClient({ libDir: 'C:\\instantclient_21_9' });
            isOracleClientInitialized = true;
        }

        const connection = await oracledb.getConnection({
            user: "JORGE",
            password: "oracle1",
            connectString: "129.146.9.181:1521/project"
        });
        console.log('Conectado a la base de datos Oracle!');
        return connection;
    } catch (error) {
        console.error('Error de conexión:', error);
        throw error;
    }
}

module.exports = conexion;
