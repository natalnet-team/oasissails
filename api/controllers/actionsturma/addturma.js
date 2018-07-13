/**
 * TurmasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  friendlyName: 'addturma',
  
  description: 'Insere usuario no collection participantes e turma no collection turmas',
  
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
      statusCode: 200,
      description: 'Success',
      viewTemplatePath: 'pages/turmas'
    },
    redirect: {
      responseType: 'redirect',
      description: 'Redireciona para a pagina de turmas para evitar uns bugs aí'
    },
  },
  
  fn: async function (inputs, exits) {
    var adicionar = await User.addToCollection(inputs.userid, 'turmas', inputs.turmaid);
    sails.log.debug('Usuário %s adicionado a turma %s',inputs.userid,inputs.turmaid);
    //return exits.success();
    throw {redirect:'/turmas'};
  },

};

