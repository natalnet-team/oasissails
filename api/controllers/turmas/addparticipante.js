module.exports = {


  friendlyName: 'Addparticipante',


  description: 'Addparticipante turmas.',


  inputs: {
  	userid: {
  		type: 'number',
  		required: true,
  	},

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
  	var adicionar = await Turma.addToCollection(inputs.turmaid, 'participantes', inputs.userid);

    throw {redirect: '/turmas'};
    //return exits.success();

  }


};
