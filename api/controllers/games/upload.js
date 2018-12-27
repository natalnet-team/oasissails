module.exports = {


  friendlyName: 'Upload',


  description: 'Upload game.',


  inputs: {
    nome: {
      type:'string',
      required: true,      
    },

    descricao: {
      type: 'string',
      required: true,
      description: 'Descrição do jogo',
    },
    
    disciplina: {
      type: 'string',
      required: true,
      description: 'disciplinas',
      example: 'história',
    },
    
    serie: {
      type: 'string',
      required: true,
      description: 'série do usuário',
      example: '6º ano',
    },
  
    conteudo: {
      type: 'string',
      required: true,
      description: 'assuntos abordados',
      example: 'império romano',
    },
  
    documento: {
      type: 'string'
      //model: 'Sgddedu',      
  //   unique: true,
  //    required: true,
    }
  },


  exits: {
  	success: {
      viewTemplatePath: 'pages/sendgame'
    },

    redirect: {
      responseType: 'redirect'
    },
  },


  fn: async function (inputs, exits) {
    //sails.log.info(res)
    var req = this.req;
    var res = this.res;
    
    // Game.find({nome: inputs.nome}).exec((err, game)=>{
    //   if(err) console.log('ERR', err);
    //   return res.serverError();
    // });

    req.file('game').upload({
    	dirname: require('path').resolve(sails.config.appPath, 'Games/' + inputs.nome),
      // don't allow the total upload size to exceed ~10MB
      maxBytes: 10000000
    }, (err, uploadedFiles) =>  {

    	//sails.log.debug(uploadedFiles)

      if (err) {
        return res.serverError(err);

      }

      var extension = uploadedFiles[0].type;
      // Se extensão não for rar ou zip
      if (!/(rar|zip)$/ig.test(extension)) {
        return res.badRequest("Invalid file type: "+extension+".  Please use rar or Zip.");
      }

      // If no files were uploaded, respond with an error.
      if (uploadedFiles.length === 0){
        return res.badRequest('No file was uploaded');

      }

      
      
      // Get the base URL for our deployed application from our custom config
      // (e.g. this might be "http://foobar.example.com:1339" or "https://example.com")
      var baseUrl = sails.config.custom.baseUrl;

      // Save the "fd" and the url where the avatar for a user can be accessed
      Game.create(Object.assign({
      	autor: req.me.id,
      	disciplina: inputs.disciplina,
        descricao: inputs.descricao,
      	serie: inputs.serie,
      	conteudo: inputs.conteudo,
      	nome: inputs.nome,
      	gamefd: uploadedFiles[0].fd

        // Generate a unique URL where the avatar can be downloaded.
        //avatarUrl: require('util').format('%s/user/avatar/%s', baseUrl, req.session.userId),

        // Grab the first file and use it's `fd` (file descriptor)
        //avatarFd: uploadedFiles[0].fd
      })).exec(function (err){
        if (err) return res.serverError();
        //throw {redirect: '/sendgame'};
        //return this.res.redirect('/sendgame');
      });
    });//.upload
    return exits.success({me: req.me});
    //throw {redirect: '/sendgame'};

  }


};
