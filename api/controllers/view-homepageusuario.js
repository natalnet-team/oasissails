module.exports = {


  friendlyName: 'View homepageusuario',


  description: 'Display "" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/homepageusuario'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
