/**
 * GameController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {

  upload: async function (inputs, res) {
  inputs.file('game').upload({
  	dirname: require('path').resolve(sails.config.appPath, 'Games/' + inputs.body.nome),
    // don't allow the total upload size to exceed ~10MB
    maxBytes: 10000000
  },function whenDone(err, uploadedFiles) {
    if (err) {
      return res.serverError(err);
      sails.log.debug('aaa1');
    }

    // If no files were uploaded, respond with an error.
    if (uploadedFiles.length === 0){
      return res.badRequest('No file was uploaded');
      sails.log.debug('aaa2');
    }

    // Get the base URL for our deployed application from our custom config
    // (e.g. this might be "http://foobar.example.com:1339" or "https://example.com")
    var baseUrl = sails.config.custom.baseUrl;

    // Save the "fd" and the url where the avatar for a user can be accessed
    Game.create(Object.assign({
    	autor: inputs.body.autor,
    	disciplina: inputs.body.disciplina,

    	serie: inputs.body.serie,
    	conteudo: inputs.body.conteudo,
    	nome: inputs.body.nome,
    	gamefd: uploadedFiles[0].fd

      // Generate a unique URL where the avatar can be downloaded.
      //avatarUrl: require('util').format('%s/user/avatar/%s', baseUrl, req.session.userId),

      // Grab the first file and use it's `fd` (file descriptor)
      //avatarFd: uploadedFiles[0].fd
    })).exec(function (err){
      if (err) return res.serverError(err);
      return res.redirect('/');
    });
  });
  sails.log.debug('aaa3');
},

};

