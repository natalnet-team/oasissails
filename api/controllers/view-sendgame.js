module.exports = {


  friendlyName: 'View sendgame',


  description: 'Display "Sendgame" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/sendgame'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
