'use strict';

module.exports = function(Registro) {

	Registro.disableRemoteMethodByName("replaceOrCreate");
	Registro.disableRemoteMethodByName("patchOrCreate");
	Registro.disableRemoteMethodByName("upsert");
	Registro.disableRemoteMethodByName("updateAttributes");

	Registro.disableRemoteMethodByName("findById");
	Registro.disableRemoteMethodByName("findOne");

	Registro.disableRemoteMethodByName("deleteById");
	Registro.disableRemoteMethodByName("replaceById");
	Registro.disableRemoteMethodByName("createChangeStream");
	Registro.disableRemoteMethodByName("prototype.patchAttributes");

	Registro.disableRemoteMethodByName("confirm");
	Registro.disableRemoteMethodByName("count");
	Registro.disableRemoteMethodByName("exists");

	Registro.disableRemoteMethodByName('__count__accessTokens');
	Registro.disableRemoteMethodByName('__create__accessTokens');
	Registro.disableRemoteMethodByName('__delete__accessTokens');
	Registro.disableRemoteMethodByName('__destroyById__accessTokens');
	Registro.disableRemoteMethodByName('__findById__accessTokens');
	Registro.disableRemoteMethodByName('__get__accessTokens');
	Registro.disableRemoteMethodByName('__updateById__accessTokens');



	Registro.beforeRemote('create', function(context, user, next) {
		console.log(context.args.data);
		context.args.data.created_at = Date.now();
		next();
	});

	Registro.beforeRemote('updateAll', function(context, user, next) {
		console.log(context.args.data);
		context.args.data.updated_at = Date.now();
		next();
	});

};