module.exports = {


  friendlyName: 'View send game',


  description: 'Display "Send game" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/sendGame'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
