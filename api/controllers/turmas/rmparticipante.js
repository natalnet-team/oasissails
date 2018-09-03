module.exports = {


  friendlyName: 'Rmparticipante',


  description: 'Rmparticipante turmas.',


  inputs: {
      turmaid: {
        type: 'number',
        required: true,
      },
  },


  exits: {
    redirect: {
    	responseType: 'redirect'
    }
  },


  fn: async function (inputs, exits) {
    var remover = await Turma.removeFromCollection(inputs.turmaid, 'participantes', this.req.me.id);

    throw {redirect: '/turmas'};

  }


};
