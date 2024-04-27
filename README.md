<<<<<<< HEAD
# musicy
Proyecto de Bases de Datos II. Desarrollado con Nodejs y Oracle Database21c [desarrollado en Windows y Linux]
=======
# musicinfoDB
Administra la información sobre la temática de melodias, relacionadas con diferentes entidades del mismo contexto (Interprete, Categoria, Playlist, Colaboración)

# Archivos constan de lo siguiente:
  -a: para hacer prueba de conexión
  -controllers/crud: contiene querys de peticiones que no requieren redirigir a una pagina del sitio
  -database/db: archivo de conexion a la DB orcale
  -documentación: contiene manual de usuario y documentación técnica
  -node_modules: modulos propios de nodejs (creados en instalación de modulos nodejs)
  -scriptsSql: contiene los scripts para creación y destruccion de la DB para Oracle21c
  -views: contiene las plantillas .ejs del sitio para responder a las routes (rutas)
  -app.js: arhivo del servidor
  -package: arhcivo json del proyecto
  -package: arhivo json de los recursos
  -router: funciones con querys sql que responden a la consulta de eventos del sitio (rutas: localhost:5000/home, etc)

# La PDB creada con el script para el sistema: PROJECT
  -Estado: READ AND WRITE (ALTER PULGGABLE DATABASE PORJECT OPEN)

  -Tener en cuenta que la creación de la PDB se sustenta en Oracle21c, con un CDB y una PDB existente como seed (con el nombre: ORCLPDB1)
  ORCLPDB1 debe tener:
    -Tablespace: USER, TEMP, DEFAULT_TABLESPACES
    -En caso de no tener una seed PDB crear la PDB PROJECT desde cero.
      -Crear tablespaces:  USER, TEMP
    -Hacer las modificaciones necesarias en el script proyecto4.sql (u otro nombre deseado)

# Oracle21c y la instancia de Base de Datos Oracle puede estar en una instancia de Oracle Cloud o de Oracle VM VirtualBox:
  -OS: Oracle Linux 8


Autor:
  threeyeies

>>>>>>> fdb72fa18704957f4feea48b452d454842271931
