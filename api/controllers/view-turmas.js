module.exports = {


  friendlyName: 'View turmas',


  description: 'Display "Turmas" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/Turmas'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
