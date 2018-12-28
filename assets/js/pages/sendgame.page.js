parasails.registerPage('sendgame', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    err: '',
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
    $('input:file').change(function (e){
      //console.log("tipo: ", this.files[0]/*.type*/);
      //var Ext_permitidas = ['.rar', '.zip'];
      if(this.files[0]){
        var fileName = this.files[0].name;
        var Ext_file = fileName.substring(fileName.lastIndexOf('.'));

        if(!/(rar|zip)$/ig.test(Ext_file)){
          console.log("Extensão ", Ext_file, " invalida");
        }else{
          console.log(Ext_file, " OK!");
        }
      }

      // if(typeof Ext_permitidas.find(function(ext){ return Ext_file == ext;}) == 'undefined'){
      //   console.log("Extensão ", Ext_file, " invalida");
      // }else{
      //   console.log(Ext_file, " OK!");
      // }
    });
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    //…
  }
});
