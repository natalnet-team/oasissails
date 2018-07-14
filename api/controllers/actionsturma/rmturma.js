/**
 * TurmasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  friendlyName: 'rmturma',
  
  description: 'Remove usuario de turma',
  
  inputs: {
    userid: {
      type: 'string',
      required: true,
      description: 'id do usuario para remover da turma'
    },
    turmaid: {
      type: 'string',
      required: true,
      description: 'id da turma para remover do usuario'
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
    var adicionar = await User.removeFromCollection(inputs.userid, 'turmas', inputs.turmaid);
    //sails.log.debug('Usuário %s removido da turma %s',inputs.userid,inputs.turmaid);
    //return exits.success();//CAUSA BUGS
    throw {redirect:'/turmas'};//ASSIM VAI
  },

};

