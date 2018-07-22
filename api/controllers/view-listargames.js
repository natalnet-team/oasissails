module.exports = {


  friendlyName: 'View listargames',


  description: 'Display "Listargames" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/listargames'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
