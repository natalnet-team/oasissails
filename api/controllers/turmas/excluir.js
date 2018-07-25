module.exports = {


  friendlyName: 'Excluir',


  description: 'Excluir turma',


  inputs: {
    turmaid: {
      type: 'number',
      required: true,
    },
  },


  exits: {
    success: {
      viewTemplatePath: 'pages/turmas'
    },
  },


  fn: async function (inputs, exits) {
    var excluir = await Turma.destroy({id: inputs.turmaid});
    //sails.log.debug('turma de id %s excluida', inputs.turmaid)
    
    var turmas_own = await Turma.find({admin: this.req.me.id}); 
    var assist = await this.req.me.turma_part;
    var turmas = await Turma.find({id: assist});
    return exits.success({me: this.req.me, turmas_own: turmas_own, turmas: turmas});

  }


};
