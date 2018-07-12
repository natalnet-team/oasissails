/**
 * TurmasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  friendlyName: 'turmascontroller',
  
  inputs: {
    userid: {
      type: 'string',
      required: true,
      description: 'id do usuario para associar a turma'
    },
    turmaid: {
      type: 'string',
      required: true,
      description: 'id da turma para associar ao usuario'
    }
  },
  
  exits: {
    success: {
      viewTemplatePath: 'pages/turmas'
    }
  },
  
  fn: async function (inputs, exits) {
    var adicionar = await User.addToCollection(inputs.userid, 'turmas', inputs.turmaid);
    return exits.success();
  },

};

