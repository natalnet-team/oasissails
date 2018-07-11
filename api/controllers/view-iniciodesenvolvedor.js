module.exports = {


  friendlyName: 'View iniciodesenvolvedor',


  description: 'Display "Iniciodesenvolvedor" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/iniciodesenvolvedor'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
