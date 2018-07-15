/**
 * TurmasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  fn: async function (inputs, exits) {

    var turmas = await Turma.find({admin: req.me.id}); 
    sails.log.debug(turmas);
    return {turmas: turmas};

  }

};

