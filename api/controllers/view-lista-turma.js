module.exports = {


  friendlyName: 'View lista turma',


  description: 'Display "Lista turma" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/lista-turma'
    }

  },


  fn: async function (inputs, exits) {

    var Devjogos = await Game.find({autor: this.req.me.id}); 
    var Devsgdd = await Sgddedu.find({dev: this.req.me.id});
    var Userjogos = await Game.find({autor: this.req.me.id}); 
    var Userturma_adms = await Turma.find().populate('admin'); 
    var Userturmas = await Turma.find().populate('participantes');
    sails.log.debug(this.req.me.id, Devjogos, Devsgdd, Userjogos, Userturma_adms, Userturmas);
    return exits.success({Devjogos: Devjogos, Devsgdd: Devsgdd, Userjogos: Userjogos, Userturma_adms: Userturma_adms, Userturmas: Userturmas});
  }

};
