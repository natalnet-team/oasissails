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
    var turma = await Turma.findOne({id: inputs.turmaid}).populate('admin');
    
    if(turma.admin.id == this.req.me.id){
      var excluir = await Turma.destroy({id: turma.id});
    }
    
    throw {redirect: '/turmas'};

  }


};
