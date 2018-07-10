module.exports = {


  friendlyName: 'View paginadeperfil',


  description: 'Display "Paginadeperfil" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/paginadeperfil'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
