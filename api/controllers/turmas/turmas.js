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

    admin: {
      model: 'User', 
      type: 'number',   
      //unique: true,
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
      description: 'The requesting user is already logged in.',
      responseType: 'redirect'
    }
  },

  fn: async function (inputs, exits) {
  	var newTurmaRecord = await Turma.create(Object.assign({
  		nome: inputs.nome,
  		admin: inputs.admin,
  		descricao: inputs.descricao,
  		codigo: inputs.descricao
  	}));
  	sails.log.debug(newTurmaRecord);


    var turmas_own = await Turma.find({admin: this.req.me.id}); 
    var assist = await this.req.me.turma_part;
    var turmas = await Turma.find({id: assist});
    return exits.success({me: this.req.me, turmas_own: turmas_own, turmas: turmas});
    

  	
  }
};

