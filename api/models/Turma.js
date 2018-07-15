/**
 * Turma.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    
    nome:{
      type: 'string',
      required: true,
      description: 'Nome da turma',
      example: 'Matematica 3º ano',
    },

    admin: {
      model: 'User',    
      //unique: true,
    },
    
    participantes: {
      collection: 'User',
      via: 'turma_part',
    },
    
    games: {
      model: 'Game',
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
    


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

