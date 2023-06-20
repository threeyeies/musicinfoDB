const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT; // Configura el formato de salida como objeto
// de lo contrario no se pasa a las plantillas ejs
const conexion = require('./database/db');

//importando y estableciendo las rutas para las funciones de crud
const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);
router.post('/saveinterprete',crud.saveinterprete)
router.post('/updateinterprete', crud.updateinterprete);
router.post('/savecategoria',crud.savecategoria)
router.post('/updatecategoria', crud.updatecategoria);
router.post('/savemelodia',crud.savemelodia)
router.post('/updatemelodia', crud.updatemelodia);
router.post('/searchinterprete', crud.searchinterprete);
router.post('/savemi', crud.savemi);
router.post('/updatemi', crud.updatemi);
router.post('/searchplay', crud.searchplay);
router.post('/searchcat', crud.searchcat);

//RUTA DE INDEX
router.get('/', function(req, res){
    res.render('index.ejs');
})

//PLAYLIST-------------------------------------------
//RUTA PARA MOSTRAR-MODIFICAR REGISTROS PLAYLIST
router.get('/playlist', async (req, res) => {
    try {
        const connection = await conexion();
        const result = await connection.execute('SELECT * FROM PLAYLIST', [], {
            //outFormat: oracledb.OUT_FORMAT_OBJECT // Configura el formato de salida como objeto
        });
        res.render('playlist/playlist.ejs', { results: result.rows });
        await connection.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta de la base de datos');
    }
});
//RUTA PARA CREAR REGISTRO PLAYLIST
router.get('/create', async (req, res) => {
    res.render('playlist/create.ejs');

});
//RUTA PARA EDITAR REGISTROS PLAYLIST
router.get('/edit/:IDPLAYLIST', async (req, res) => {
    try {
        const IDPLAYLIST = req.params.IDPLAYLIST;
        const connection = await conexion();
        const result = await connection.execute('SELECT * FROM PLAYLIST WHERE IDPLAYLIST = :IDPLAYLIST ', [IDPLAYLIST], {
        });
        res.render('playlist/edit.ejs', { user: result.rows[0] });
        await connection.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta de la base de datos');
    }
})
//RUTA PARA BORRAR REGISTROS PLAYLIST
router.get('/delete/:IDPLAYLIST', async (req, res) => {
    try {
        const IDPLAYLIST = req.params.IDPLAYLIST;
        const connection = await conexion();
        const result = await connection.execute('DELETE FROM PLAYLIST WHERE IDPLAYLIST = :IDPLAYLIST ', [IDPLAYLIST], {
        });
        res.redirect('/playlist');
        await connection.commit();
        await connection.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta de la base de datos');
    }
})

//INTERPRETE-----------------------------------------
//RUTA PARA MOSTRAR-MODIFICAR REGISTROS INTERPRETE
router.get('/interprete', async (req, res) => {
    try {
        const connection = await conexion();
        const result = await connection.execute('SELECT * FROM INTERPRETE', [], {
        });
        res.render('interprete/interprete.ejs', { results: result.rows });
        await connection.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta de la base de datos');
    }
});
//RUTA PARA CREAR REGISTRO INTERPRETE
router.get('/createinterprete', async (req, res) => {
    res.render('interprete/createinterprete.ejs');

});
//RUTA PARA EDITAR REGISTROS INTERPETE
router.get('/editinterprete/:IDINTERPRETE', async (req, res) => {
    try {
        const IDINTERPRETE = req.params.IDINTERPRETE;
        const connection = await conexion();
        const result = await connection.execute('SELECT * FROM INTERPRETE WHERE IDINTERPRETE = :IDINTERPRETE ', [IDINTERPRETE], {
        });
        res.render('interprete/editinterprete.ejs', { user: result.rows[0] });
        await connection.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta de la base de datos');
    }
})
//RUTA PARA BORRAR REGISTROS INTERPRETE
router.get('/deleteinterprete/:IDINTERPRETE', async (req, res) => {
    try {
        const IDINTERPRETE = req.params.IDINTERPRETE;
        const connection = await conexion();
        const result = await connection.execute('DELETE FROM INTERPRETE WHERE IDINTERPRETE = :IDINTERPRETE ', [IDINTERPRETE], {
        });
        res.redirect('/interprete');
        await connection.commit();
        await connection.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta de la base de datos');
    }
})

//CATEGORIA---------------------------------------------
//RUTA PARA MOSTRAR-MODIFICAR REGISTROS CATEGORIA
router.get('/categoria', async (req, res) => {
    try {
        const connection = await conexion();
        const result = await connection.execute('SELECT * FROM CATEGORIA', [], {
        });
        res.render('categoria/categoria.ejs', { results: result.rows });
        await connection.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta de la base de datos');
    }
});
//RUTA PARA CREAR REGISTRO CATEGORIA
router.get('/createcategoria', async (req, res) => {
    res.render('categoria/createcategoria.ejs');

});
//RUTA PARA EDITAR REGISTROS CATEGORIA
router.get('/editcategoria/:IDCATEGORIA', async (req, res) => {
    try {
        const IDCATEGORIA = req.params.IDCATEGORIA;
        const connection = await conexion();
        const result = await connection.execute('SELECT * FROM CATEGORIA WHERE IDCATEGORIA = :IDCATEGORIA ', [IDCATEGORIA], {
        });
        res.render('categoria/editcategoria.ejs', { user: result.rows[0] });
        await connection.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta de la base de datos');
    }
})
//RUTA PARA BORRAR REGISTROS CATEGORIA
router.get('/deletecategoria/:IDCATEGORIA', async (req, res) => {
    try {
        const IDCATEGORIA = req.params.IDCATEGORIA;
        const connection = await conexion();
        const result = await connection.execute('DELETE FROM CATEGORIA WHERE IDCATEGORIA = :IDCATEGORIA ', [IDCATEGORIA], {
        });
        res.redirect('/categoria');
        await connection.commit();
        await connection.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta de la base de datos');
    }
})

//MELODIA
//RUTA PARA MOSTRAR-MODIFICAR REGISTROS MELODIA
router.get('/melodia', async (req, res) => {
    try {
        const connection = await conexion();
        const result = await connection.execute('SELECT * FROM MELODIA', [], {
        });
        res.render('melodia/melodia.ejs', { results: result.rows });
        await connection.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta de la base de datos');
    }
});
//RUTA PARA CREAR REGISTRO MELODIA
router.get('/createmelodia', async (req, res) => {
    try {
        const connection = await conexion();
        const result = await connection.execute('SELECT IDCATEGORIA, GENERO, SUBGENERO FROM CATEGORIA', [], {
        });
        const resultplay = await connection.execute('SELECT IDPLAYLIST, NOMBRE FROM PLAYLIST', [], {
        });
        res.render('melodia/createmelodia.ejs', { results: result.rows, resultsplay: resultplay.rows});
        await connection.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta de la base de datos');
    }
    //res.render('melodia/createmelodia.ejs');
});
//RUTA PARA EDITAR REGISTROS MELODIA
router.get('/editmelodia/:IDMELODIA', async (req, res) => {
    try {
        const IDMELODIA = req.params.IDMELODIA;
        const connection = await conexion();
        const result = await connection.execute('SELECT * FROM MELODIA WHERE IDMELODIA = :IDMELODIA ', [IDMELODIA], {
        });
        const resultcat = await connection.execute('SELECT IDCATEGORIA, GENERO, SUBGENERO FROM CATEGORIA', [], {
        });
        const resultplay = await connection.execute('SELECT IDPLAYLIST, NOMBRE FROM PLAYLIST', [], {
        });
        res.render('melodia/editmelodia.ejs', { user: result.rows[0], resultscat: resultcat.rows, resultsplay: resultplay.rows});
        await connection.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta de la base de datos');
    }
})
//RUTA PARA BORRAR REGISTROS MELODIA
router.get('/deletemelodia/:IDMELODIA', async (req, res) => {
    try {
        const IDMELODIA = req.params.IDMELODIA;
        const connection = await conexion();
        const result = await connection.execute('DELETE FROM MELODIA WHERE IDMELODIA = :IDMELODIA ', [IDMELODIA], {
        });
        res.redirect('/melodia');
        await connection.commit();
        await connection.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta de la base de datos');
    }
})


//MELODIA_INTERPRETE
//RUTA PARA MOSTRAR SELECT MELODIA_INTERPRETE
router.get('/mi', async (req, res) => {
    try {
        const connection = await conexion();
        const result = await connection.execute('SELECT DISTINCT MELODIA_INTERPRETE.IDINTERPRETE, INTERPRETE.NOMBRE AS INTERPRETE_NOMBRE, MELODIA_INTERPRETE.IDMELODIA, MELODIA.NOMBRE AS MELODIA_NOMBRE FROM INTERPRETE JOIN MELODIA_INTERPRETE ON INTERPRETE.IDINTERPRETE = MELODIA_INTERPRETE.IDINTERPRETE JOIN MELODIA ON MELODIA.IDMELODIA = MELODIA_INTERPRETE.IDMELODIA', [], {
        });
        res.render('mi/mi.ejs', { results: result.rows });
        await connection.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta de la base de datos');
    }
});
//RUTA PARA CREAR MELODIA_INTERPRETE
router.get('/createmi', async (req, res) => {
    try {
        const connection = await conexion();
        const resultmel = await connection.execute('SELECT IDMELODIA, NOMBRE AS MELODIA_NOMBRE FROM MELODIA', [], {});
        const resultint = await connection.execute('SELECT IDINTERPRETE, NOMBRE AS INTERPRETE_NOMBRE FROM INTERPRETE', [], {});
        res.render('mi/createmi.ejs', { resultsmel: resultmel.rows, resultsint: resultint.rows});
        await connection.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta de la base de datos');
    }
    //res.render('melodia/createmelodia.ejs');
});
//RUTA PARA EDITAR REGISTROS MELODIA_INTERPRETE
router.get('/editmi/:IDMELODIA', async (req, res) => {
    try {
        const IDMELODIA = req.params.IDMELODIA;
        const connection = await conexion();
        const resultmel = await connection.execute('SELECT IDMELODIA, NOMBRE AS MELODIA_NOMBRE FROM MELODIA', [], {});
        const resultint = await connection.execute('SELECT IDINTERPRETE, NOMBRE AS INTERPRETE_NOMBRE FROM INTERPRETE', [], {});
        res.render('mi/editmi.ejs', { resultsmel: resultmel.rows, resultsint: resultint.rows});
        await connection.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta de la base de datos');
    }
})
//RUTA PARA BORRAR REGISTROS MELODIA_INTERPRETE
router.get('/deletemi/:IDMELODIA/:IDINTERPRETE', async (req, res) => {
    try {
        const IDMELODIA = req.params.IDMELODIA;
        const IDINTERPRETE = req.params.IDINTERPRETE;
        const connection = await conexion();
        const result = await connection.execute('DELETE FROM MELODIA_INTERPRETE WHERE IDMELODIA = :IDMELODIA AND IDINTERPRETE = :IDINTERPRETE', [IDMELODIA, IDINTERPRETE], {
        });
        res.redirect('/mi');
        await connection.commit();
        await connection.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta de la base de datos');
    }
})

//XCONSULTAS
//RUTA PARA SELECCIONAR INTERPRETE (PARA BUSCAR SUS MELODIAS)
router.get('/melforartist', async (req, res) => {
    try {
        const connection = await conexion();
        const result = await connection.execute('SELECT IDINTERPRETE, NOMBRE FROM INTERPRETE', [], {
        });
        res.render('xconsultas/melforartist.ejs', { results: result.rows });
        await connection.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta de la base de datos');
    }
});
//RUTA PARA SELECCIONAR UNA PLAYLIST (Y BUSCAR SUS MELODIAS)
router.get('/melforplaylist', async (req, res) => {
    try {
        const connection = await conexion();
        const result = await connection.execute('SELECT IDPLAYLIST, NOMBRE FROM PLAYLIST', [], {
        });
        res.render('xconsultas/melforplaylist.ejs', { results: result.rows });
        await connection.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta de la base de datos');
    }
});

//RUTA PARA SELECCIONAR UNA PLAYLIST (Y BUSCAR SUS MELODIAS)
router.get('/melforcat', async (req, res) => {
    try {
        const connection = await conexion();
        const result = await connection.execute('SELECT IDCATEGORIA, GENERO, SUBGENERO FROM CATEGORIA', [], {
        });
        res.render('xconsultas/melforcat.ejs', { results: result.rows });
        await connection.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la consulta de la base de datos');
    }
});

module.exports = router;



