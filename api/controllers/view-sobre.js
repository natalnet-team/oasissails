module.exports = {


  friendlyName: 'View sobre',


  description: 'Display "Sobre" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/sobre',
    }

  },


  fn: async function (inputs, exits) {
    var jogos = await Game.find({}); 
    sails.log.debug(jogos);
    return exits.success({jogos: jogos});

  }


};
