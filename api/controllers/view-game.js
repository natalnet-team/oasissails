module.exports = {


  friendlyName: 'View game',


  description: 'Display "Game" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/game'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
