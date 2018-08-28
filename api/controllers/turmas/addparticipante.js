module.exports = {


  friendlyName: 'Addparticipante',


  description: 'Addparticipante turmas.',


  inputs: {
  	turmaid: {
  		type: 'number',
  		required: true,
  	}

  },


  exits: {
//   	success: {
//       viewTemplatePath: 'pages/turmas'
//     },

    redirect: {
    	responseType: 'redirect'
    }

  },


  fn: async function (inputs, exits) {
    var turma = await Turma.findOne({id: inputs.turmaid});
    //TO DO: VERIFICAR CODIGO
  	var adicionar = await Turma.addToCollection(turma.id, 'participantes', this.req.me.id);

    throw {redirect: '/turmas'};

  }


};
