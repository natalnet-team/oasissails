module.exports = {


  friendlyName: 'View sobre',


  description: 'Display "Sobre" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/partial/listturma',
    }

  },


  fn: async function (inputs, exits) {
    var turmas = await Turma.find(); 
    sails.log.debug(turmas);
    return exits.success(err, {turmas: turmas});
  }


};
