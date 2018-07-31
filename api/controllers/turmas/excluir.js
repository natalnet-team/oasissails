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

    redirect: {
      responseType: 'redirect'
    }
  },


  fn: async function (inputs, exits) {
    //TO DO: CHECAR ADMIN
    var excluir = await Turma.destroy({id: inputs.turmaid});
    //sails.log.debug('turma de id %s excluida', inputs.turmaid)
    
    // var turmas_own = await Turma.find({admin: this.req.me.id}); 
    // // var assist = await this.req.me.turma_part;
    // // var turmas = await Turma.find({id: assist});
    // var turmas = {};
    // return exits.success({me: this.req.me, turmas_own: turmas_own, turmas: turmas});
    throw {redirect: '/turmas'};

  }


};
