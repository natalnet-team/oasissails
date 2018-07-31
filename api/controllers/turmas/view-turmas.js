module.exports = {


  friendlyName: 'View turmas',


  description: 'Display "Turmas" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/turmas'
    }

  },


  fn: async function (inputs, exits) {
    //encontra usuario e armazena as turmas
    var usr = await User.findOne({id: this.req.me.id}).populate('turma_owned').populate('turma_part');

    var findthis = [];
    usr.turma_owned.forEach( function(item){ findthis.push(item.id) } );//armazena id das turmas em que o usuario é admin
    usr.turma_part.forEach( function(item){ findthis.push(item.id) } );//armazena id das turmas em que o usuario é participante

    //encontra turmas em que o usuario é participante
    var turmas = await Turma.find({id: findthis}).populate('participantes').populate('admin');
    /*var itsme = this.req.me.id;
    turmas.sort(function(a,b){
      if(a.admin.id == itsme){ return  -1}
      else{ return 1 }
    })*/
    //sails.log.debug(turmas);
    
    return exits.success({turmas: turmas});

  }


};
