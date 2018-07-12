/**
 * Game.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    
    nome: {
      type:'string',
      required: true,      
    },

    descricao: {
      type: 'string',
      required: true,
      description: 'Descrição do jogo',
    },

    autor: {
      model: 'User',
      required: true,
      description: 'Usuário autor do jogo',
    },
    
    disciplina: {
      type: 'string',
      required: true,
      description: 'disciplinas',
      example: 'história',
    },
    
    serie: {
      type: 'string',
      required: true,
      description: 'série do usuário',
      example: '6º ano',
    },
  
    conteudo: {
      type: 'string',
      required: true,
      description: 'assuntos abordados',
      example: 'império romano',
    },
  
    documento: {
      model: 'Sgddedu',
      required: true,
      unique: true,
    },


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

