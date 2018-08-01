parasails.registerPage('sendgame', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    // Form data
    formData: { /* … */ },

    // For tracking client-side validation errors in our form.
    // > Has property set to `true` for each invalid property in `formData`.
    formErrors: { /* … */ },

    formRules: {
      nome: {required: true},
      autor: {required: true},
      disciplina: {required: true},
      descricao: {required: true},
      serie: {required: true},
      conteudo: {required: true},
      game: {required: true}
    },
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
  },
  mounted: async function() {
    //…
    $('input:file').change(function (e){
      console.log("tipo: ", this.files[0].type);
      var Ext_permitidas = ['rar', 'zip'];
      var Ext_file = this.files[0].value.split('.').pop();

      if(typeof Ext_permitidas.find(function(ext){ return Ext_file == ext;}) == 'undefined'){
        console.log("Extensão ", Ext_file, " invalida");
      }else{
        console.log(Ext_file, " OK!");
      }
    });
  },
  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    //… 

    

    //Exttest: function(){
    //  var Ext_permitidas = ['rar', 'zip'];
    //  var Ext_file = this.files[0].value.split('.').pop();
//
    //  if(typeof Ext_permitidas.find(function(ext){ return Ext_file == ext;}) == 'undefined'){
    //    sails.log.debug('extensão '+EXt_file+' invalida');
    //  }else{
    //    sails.log.debug(Ext_file+' OK!');
    //  }
    //}
  }
});
