module.exports = {


  friendlyName: 'Sidebar',


  description: 'Sidebar something.',


  inputs: {
    user: {type: 'ref'},
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    var turmas = await Turma.find(); 
    sails.log.debug('passou aq',turmas);
    return turmas;

  }


};

