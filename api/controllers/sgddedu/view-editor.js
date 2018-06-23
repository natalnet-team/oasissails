module.exports = {


  friendlyName: 'View editor',


  description: 'Display "Editor" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/sgddedu/editor'
    }

  },


  fn: async function (inputs, exits) {
    sails.log.debug("Passou aqui.... action editor");
    // Respond with view.
    return exits.success();

  }


};
