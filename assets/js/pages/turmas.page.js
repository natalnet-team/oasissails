parasails.registerPage('turmas', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    selecionada: '',
    todas: '',
    codigo: ''
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
    mostrarTodas: async function(){
      //JQUERY AJAX (GET) REQUEST PARA MOSTRAR TODAS AS TURMAS
      //ARMAZENA O RESULTADO RETORNADO PELO CONTROLLER EM todas
      $.get("/turmas/mostrartodas"/*,TO DO: DADOS PARA PAGINAÇÃO {skip: , limit: }*/)
      .done((result)=>{
        this.todas = result.todas;
      })
      .fail((error)=>{
        console.log(error);
      });
    },//
    
    isInTurma: function(turma){
      //MOSTRA O BOTÃO DE SAIR SE O USUARIO ESTIVER ENTRE OS PARTICIPANTES
      //E O BOTÃO DE ENTRAR SE NÃO ESTIVER
      for (var i = 0; i < turma.participantes.length; i++) {
        if(turma.participantes[i].id == this.me.id){
          return true;
        }
      }
      return false;
    },
   //…
  }
});
