module.exports = {


  friendlyName: 'View turmas',


  description: 'Display "Turmas" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/turmas'
    }

  },


  fn: async function (inputs, exits) {

    var turmas_own = await Turma.find({admin: this.req.me.id}); 
    var assist = await this.req.me.turma_part;
    var turmas = await Turma.find({id: assist});
    return exits.success({turmas_own: turmas_own, turmas: turmas});

  }


};
