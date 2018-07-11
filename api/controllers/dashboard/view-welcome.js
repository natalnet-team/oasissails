module.exports = {


  friendlyName: 'View welcome page',


  description: 'Display the dashboard "Welcome" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/welcome',
      description: 'Display the welcome page for authenticated users.'
    },

  },


  fn: async function (inputs, exits) {
    var Devjogos = await Game.find({autor: this.req.me.id}); 
    var Devsgdd = await Sgddedu.find({dev: this.req.me.id});
    var Devturma = await Turmas.find({admin: this.req.me.id});  
    var Userjogos = await Game.find({autor: this.req.me.id}); 
    var Userturma_adm = await Turmas.find().populate('admin'); 
    var Userturma = await Turmas.find({participantes: this.req.me.id});
    sails.log.debug(this.req.me.id, Devjogos, Devsgdd, Devturma, Userjogos, Userturma_adm, Userturma);
    return exits.success({Devjogos: Devjogos});
  }
};