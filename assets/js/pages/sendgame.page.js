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
    
  },
  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    //…
    handleParsingForm: function() {
      // Clear out any pre-existing error messages.
      this.formErrors = {};
 
      var argins = this.formData;

      if(!argins.nome) {
        this.formErrors.nome = true;
      }

      if(!argins.autor) {
        this.formErrors.autor = true;
      }

      if(!argins.disciplina) {
        this.formErrors.disciplina = true;
      }

      if(argins.descricao) {
        this.formErrors.descricao = true;
      }

      if(!argins.serie) {
        this.formErrors.serie = true;
      }

      if(!argins.conteudo) {
        this.formErrors.conteudo = true;
      }

      if(!argins.game) {
        this.formErrors.game = true;
      }
      // If there were any issues, they've already now been communicated to the user,
      // so simply return undefined.  (This signifies that the submission should be
      // cancelled.)
      if (Object.keys(this.formErrors).length > 0) {
        return;
      }

      return argins;
    },

    Exttest: function(input){
      var Ext_permtidas = ['rar', 'zip'];
      var Ext_file = input.value.split('.').pop();

      if(typeof Ext_permitidas.find(function(ext){ return Ext_file == ext;}) == 'undefined'){
        sails.log.debug('extensão'+EXt_file+' invalida');
      }else{
        sails.log.debug(Ext_file+' OK!');
      }
    }
  }
});
