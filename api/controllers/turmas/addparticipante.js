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
  	success: {
      viewTemplatePath: 'pages/turmas'
    },

    redirect: {
    	responseType: 'redirect'
    }

  },


  fn: async function (inputs, exits) {
  	//TO DO: USAR this.req.me.id (?)
    //TO DO: VERIFICAR SE A TURMA EXISTE
  	var adicionar = await Turma.addToCollection(inputs.turmaid, 'participantes', this.req.me.id);

    throw {redirect: '/turmas'};
    //return exits.success();

  }


};
