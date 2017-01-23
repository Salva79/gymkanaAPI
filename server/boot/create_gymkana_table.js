module.exports = function(app) {
  app.dataSources.mysqlDS.automigrate('registro', function(err) {
    if (err) throw err;

    console.log('Tabla registro creada: \n');

  });
};