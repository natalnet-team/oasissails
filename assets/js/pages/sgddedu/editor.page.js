parasails.registerPage('editor', {

  data: {
    //…
    teste: "",
    titulo: "",
    autor: "",
    historia: "",
    jogo: "" ,
    
  },


  
  
  
  beforeMount: function() {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
  },
  mounted: async function() {
    //…
  },

  methods: {
    //…
  }
});
