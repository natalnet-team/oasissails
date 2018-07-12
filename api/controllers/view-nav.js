module.exports = {


  friendlyName: 'View nav',


  description: 'Display "Nav" page.',


  exits: {

    success: {
      
    }

  },


  fn: async function (inputs, exits) {
    var turmas = await Turma.find({admin: req.me.id}); 
    sails.log.debug('passou aq',turmas);
    return exits.success({turmas: turmas});
  }



};
