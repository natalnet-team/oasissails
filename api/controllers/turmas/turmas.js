/**
 * TurmasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
 
 inputs: {

    nome:{
      type: 'string',
      required: true,
      description: 'Nome da turma',
      example: 'Matematica 3º ano',
    },
    
    participantes: {
      type: 'number',
      collection: 'User',
      via: 'turma_part',
    },
    
    games: {
      model: 'Game',
      type: 'number',
    },
    descricao: {
      type: 'string',
      required: true,
      description: 'descrição das turmas',
      example: 'Turma do 6º ano do professor José',
    },
    
    codigo: {
      type: 'string',
      required: true,
      description: 'código da turma',
      example: '554782',
    }

  },
  exits: {
  	success: {
      viewTemplatePath: 'pages/turmas'
    },
    redirect: {
      responseType: 'redirect'
    }
  },

  fn: async function (inputs, exits) {
  	var newTurmaRecord = await Turma.create(Object.assign({
  		nome: inputs.nome,
  		admin: this.req.me.id,
  		descricao: inputs.descricao,
  		codigo: inputs.codigo
  	}));
  	sails.log.debug(newTurmaRecord);

    throw {redirect: '/turmas'};
    

  	
  }
};

