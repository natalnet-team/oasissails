module.exports = {


  friendlyName: 'View turmas',


  description: 'Display "Turmas" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/turmas'
    }

  },


  fn: async function (inputs, exits) {

    var turmas_own = await Turma.find({admin: this.req.me.id}); 
    //var assist = await Turma.find();
    //sails.log.debug(assist);
    //assist.forEach(function(turma, index){
    //if(turma.participantes != null){
    //      var part = turma.participantes[2];
    //      var turmas = turma.find({part: this.req.me.id});
    //}
    //});
    
      
    
    
    //sails.log.debug(part);  
    //var turmas = await User.findOne({turma_part: this.req.me.id}); 
    var assist = await this.req.me.turma_part;
    sails.log.debug(turmas);
    var turmas = await Turma.find({id: assist});
    return exits.success({turmas_own: turmas_own, turmas: turmas});

  }


};
