// crud.js | funciones que no referencian a ninguna plantilla ejs, unicamente ejecutan sentencias sql
const oracledb = require('oracledb');
const conexion = require('../database/db');

//PLAYLIST------------------------------------------------------------------------------
//INSERTAR UN REGISTRO PLAYLIST
let playlistIdCounter = 1; // Variable para llevar la cuenta del último ID utilizado

exports.save = async (req, res) => {
  const NOMBRE = req.body.NOMBRE;
  const SEGUIDORES = req.body.SEGUIDORES;
  
  const playlistId = playlistIdCounter++; // Generar el ID autoincrementable

  const insertSql = `INSERT INTO PLAYLIST (NOMBRE, SEGUIDORES) VALUES (:NOMBRE, :SEGUIDORES)`;
  
  try {
    const connection = await conexion();
    const result = await connection.execute(insertSql, { NOMBRE: NOMBRE, SEGUIDORES:SEGUIDORES });
    res.redirect('/playlist');
    await connection.commit();
    await connection.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al guardar el registro en la base de datos');
  }
};
//ACTUALIZAR un REGISTRO PLAYLIST
exports.update = async (req, res) => {
    const IDPLAYLIST = req.body.IDPLAYLIST;
    const NOMBRE = req.body.NOMBRE;
    const SEGUIDORES = req.body.SEGUIDORES;
    
    try {
      const connection = await conexion();
      const result = await connection.execute('UPDATE PLAYLIST SET NOMBRE = :NOMBRE, SEGUIDORES = :SEGUIDORES WHERE IDPLAYLIST = :IDPLAYLIST',
      { NOMBRE: { val: NOMBRE }, SEGUIDORES: { val: SEGUIDORES }, IDPLAYLIST: { val: IDPLAYLIST }},{
    });
      res.redirect('/playlist');
      await connection.commit();
      await connection.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al guardar el registro en la base de datos');
    }
  };

//INTERPRETE
//INSERTAR UN REGISTRO INTERPRETE
let interpreteIdCounter = 1; // Variable para llevar la cuenta del último ID utilizado

exports.saveinterprete = async (req, res) => {
  const NOMBRE = req.body.NOMBRE;
  const OYENTESMNS = req.body.OYENTESMNS;
  const SEGUIDORES = req.body.SEGUIDORES;
  const OC = req.body.OC;
  const CONDICION = req.body.CONDICION;
  
  const interpreteId = interpreteIdCounter++; // Generar el ID autoincrementable

  const insertSql = `INSERT INTO INTERPRETE (NOMBRE, OYENTESMNS, SEGUIDORES, OC, CONDICION) VALUES (:NOMBRE, :OYENTESMNS, :SEGUIDORES, :OC, :CONDICION)`;
  
  try {
    const connection = await conexion();
    const result = await connection.execute(insertSql, { NOMBRE: NOMBRE, OYENTESMNS: OYENTESMNS, SEGUIDORES: SEGUIDORES, OC: OC, CONDICION: CONDICION });
    res.redirect('../interprete');
    await connection.commit();
    await connection.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al guardar el registro en la base de datos');
  }
}; 
//ACTUALIZAR un REGISTRO INTERPRETE
exports.updateinterprete = async (req, res) => {
    const IDINTERPRETE = req.body.IDINTERPRETE;
    const NOMBRE = req.body.NOMBRE;
    const OYENTESMNS = req.body.OYENTESMNS;
    const SEGUIDORES = req.body.SEGUIDORES;
    const OC = req.body.OC;
    const CONDICION = req.body.CONDICION;

    try {
      const connection = await conexion();
      const result = await connection.execute('UPDATE INTERPRETE SET NOMBRE = :NOMBRE, OYENTESMNS = :OYENTESMNS, SEGUIDORES = :SEGUIDORES, OC = :OC, CONDICION = :CONDICION WHERE IDINTERPRETE = :IDINTERPRETE',
      { NOMBRE: { val: NOMBRE }, OYENTESMNS: { val: OYENTESMNS }, SEGUIDORES: { val: SEGUIDORES }, OC: { val: OC }, CONDICION: { val: CONDICION } ,IDINTERPRETE: { val: IDINTERPRETE }},{
    });
      res.redirect('../interprete');
      await connection.commit();
      await connection.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al guardar el registro en la base de datos');
    }
  };

//CATEGORIA
//INSERTAR UN REGISTRO CATEGORIA
let categoriaIdCounter = 1; // Variable para llevar la cuenta del último ID utilizado

exports.savecategoria = async (req, res) => {
  const GENERO = req.body.GENERO;
  const SUBGENERO = req.body.SUBGENERO;
  
  const playlistId = categoriaIdCounter++; // Generar el ID autoincrementable

  const insertSql = `INSERT INTO CATEGORIA (GENERO, SUBGENERO) VALUES (:GENERO, :SUBGENERO)`;
  
  try {
    const connection = await conexion();
    const result = await connection.execute(insertSql, { GENERO: GENERO, SUBGENERO:SUBGENERO });
    res.redirect('../categoria');
    await connection.commit();
    await connection.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al guardar el registro en la base de datos');
  }
}; 
//ACTUALIZAR un REGISTRO CATEGORIA
exports.updatecategoria = async (req, res) => {
    const IDCATEGORIA = req.body.IDCATEGORIA;
    const GENERO = req.body.GENERO;
    const SUBGENERO = req.body.SUBGENERO;
    
    try {
      const connection = await conexion();
      const result = await connection.execute('UPDATE CATEGORIA SET GENERO = :GENERO, SUBGENERO = :SUBGENERO WHERE IDCATEGORIA = :IDCATEGORIA',
      { GENERO: { val: GENERO }, SUBGENERO: { val: SUBGENERO }, IDCATEGORIA: { val: IDCATEGORIA }},{
    });
      res.redirect('../categoria');
      await connection.commit();
      await connection.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al guardar el registro en la base de datos');
    }
  };

//MELODIA
//INSERTAR UN REGISTRO MELODIA
let melodiaIdCounter = 1; // Variable para llevar la cuenta del último ID utilizado

exports.savemelodia = async (req, res) => {
  const NOMBRE= req.body.NOMBRE;
  const DURACION = req.body.DURACION;
  const ALBUM = req.body.ALBUM;
  const LIKES = req.body.LIKES;
  const IDCATEGORIA = req.body.IDCATEGORIA;
  const IDPLAYLIST = req.body.IDPLAYLIST;
  
  const melodiaId = melodiaIdCounter++; // Generar el ID autoincrementable

  const insertSql = `INSERT INTO MELODIA (NOMBRE, DURACION, ALBUM, LIKES, IDCATEGORIA, IDPLAYLIST) VALUES (:NOMBRE, :DURACION, :ALBUM, :LIKES, :IDCATEGORIA, :IDPLAYLIST)`;
  
  try {
    const connection = await conexion();
    const result = await connection.execute(insertSql, { NOMBRE: NOMBRE, DURACION:DURACION, ALBUM:ALBUM, LIKES:LIKES, IDCATEGORIA:IDCATEGORIA, IDPLAYLIST:IDPLAYLIST });
    res.redirect('../melodia');
    await connection.commit();
    await connection.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al guardar el registro en la base de datos');
  }
}; 
//ACTUALIZAR un REGISTRO MELODIA
exports.updatemelodia = async (req, res) => {
    const IDMELODIA = req.body.IDMELODIA;
    const NOMBRE= req.body.NOMBRE;
    const DURACION = req.body.DURACION;
    const ALBUM = req.body.ALBUM;
    const LIKES = req.body.LIKES;
    const IDCATEGORIA = req.body.IDCATEGORIA;
    const IDPLAYLIST = req.body.IDPLAYLIST;
      
    try {
      const connection = await conexion();
      const result = await connection.execute('UPDATE MELODIA SET NOMBRE = :NOMBRE, DURACION = :DURACION, ALBUM = :ALBUM, LIKES = :LIKES, IDCATEGORIA = :IDCATEGORIA, IDPLAYLIST = :IDPLAYLIST WHERE IDMELODIA = :IDMELODIA',
      { NOMBRE: { val: NOMBRE }, DURACION: { val: DURACION }, ALBUM: { val: ALBUM }, LIKES: { val: LIKES }, IDCATEGORIA, IDPLAYLIST, IDMELODIA: { val: IDMELODIA }},{
      });
      res.redirect('../melodia');
      await connection.commit();
      await connection.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al guardar el registro en la base de datos');
    }
  };

//MELODIA_INTERPRETE
//INSERTAR UN MELODIA-INTERPRETE (CREDITO)
exports.savemi = async (req, res) => {
  const IDMELODIA= req.body.IDMELODIA;
  const IDINTERPRETE = req.body.IDINTERPRETE;

  const insertSql = `INSERT INTO MELODIA_INTERPRETE (IDMELODIA, IDINTERPRETE) VALUES (:IDMELODIA, :IDINTERPRETE)`;
  
  try {
    const connection = await conexion();
    const result = await connection.execute(insertSql, { IDMELODIA: IDMELODIA, IDINTERPRETE: IDINTERPRETE  });
    res.redirect('../mi');
    await connection.commit();
    await connection.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al guardar el registro en la base de datos');
  }
}; 
//ACTUALIZAR un REGISTRO MELODIA_INTERPRETE
exports.updatemi = async (req, res) => {
  const IDMELODIA = req.body.IDMELODIA[1];
  const IDINTERPRETE = req.body.IDINTERPRETE;

  try {
    const connection = await conexion();
    const result = await connection.execute('UPDATE MELODIA_INTERPRETE SET IDMELODIA = :IDMELODIA, IDINTERPRETE = :IDINTERPRETE WHERE IDMELODIA = :IDMELODIA',
    { IDMELODIA, IDINTERPRETE, IDMELODIA: IDMELODIA },{
    });
    res.redirect('../mi');
    await connection.commit();
    await connection.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al guardar el registro en la base de datos');
  }
};

//XCONSULTAS
//BUSCAR MELODIAS DEL INTERPRETE
exports.searchinterprete = async (req, res) => {
  const IDINTERPRETE = req.body.IDINTERPRETE;
    
  try {
    const connection = await conexion();
    const result = await connection.execute('SELECT MELODIA.NOMBRE, MELODIA.DURACION, MELODIA.ALBUM, MELODIA.LIKES FROM MELODIA NATURAL JOIN MELODIA_INTERPRETE JOIN INTERPRETE ON MELODIA_INTERPRETE.IDINTERPRETE = INTERPRETE.IDINTERPRETE WHERE INTERPRETE.IDINTERPRETE =: IDINTERPRETE ', 
      { IDINTERPRETE }, { 
    });
    res.render('xconsultas/selectmelforartist.ejs', { results: result.rows });
    await connection.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al consultar join');
  }
};
//BUSCAR MELODIAS DE LA PLAYLIST
exports.searchplay = async (req, res) => {
  const IDPLAYLIST = req.body.IDPLAYLIST; 
  try {
    const connection = await conexion();
    const result = await connection.execute('SELECT MELODIA.NOMBRE AS MELODIA_NOMBRE, INTERPRETE.NOMBRE AS INTERPRETE_NOMBRE, MELODIA.DURACION, MELODIA.ALBUM, MELODIA.LIKES FROM PLAYLIST JOIN MELODIA ON PLAYLIST.IDPLAYLIST = MELODIA.IDPLAYLIST JOIN MELODIA_INTERPRETE ON MELODIA.IDMELODIA = MELODIA_INTERPRETE.IDMELODIA JOIN INTERPRETE ON MELODIA_INTERPRETE.IDINTERPRETE = INTERPRETE.IDINTERPRETE WHERE PLAYLIST.IDPLAYLIST = :IDPLAYLIST', 
      { IDPLAYLIST }, { 
    });
    res.render('xconsultas/selectmelforplaylist.ejs', { results: result.rows });
    await connection.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al consultar join');
  }
};
//BUSCAR MELODIAS DE LA CATEGORIA
exports.searchcat = async (req, res) => {
  const IDCATEGORIA = req.body.IDCATEGORIA; 
  try {
    const connection = await conexion();
    const result = await connection.execute('SELECT MELODIA.NOMBRE AS MELODIA_NOMBRE, INTERPRETE.NOMBRE AS INTERPRETE_NOMBRE, MELODIA.DURACION, MELODIA.ALBUM, MELODIA.LIKES FROM CATEGORIA JOIN MELODIA ON CATEGORIA.IDCATEGORIA = MELODIA.IDCATEGORIA JOIN MELODIA_INTERPRETE ON MELODIA.IDMELODIA = MELODIA_INTERPRETE.IDMELODIA JOIN INTERPRETE ON MELODIA_INTERPRETE.IDINTERPRETE = INTERPRETE.IDINTERPRETE WHERE CATEGORIA.IDCATEGORIA = :IDCATEGORIA', 
      { IDCATEGORIA }, { 
    });
    res.render('xconsultas/selectmelforcat.ejs', { results: result.rows });
    await connection.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al consultar join');
  }
};