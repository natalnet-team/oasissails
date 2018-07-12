module.exports = {


  friendlyName: 'View game',


  description: 'Display "Game" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/game'
    }

  },


  fn: async function (inputs, exits) {
    var game = await Game.find()
    // Respond with view.
    return exits.success({games: game});

  }


};
