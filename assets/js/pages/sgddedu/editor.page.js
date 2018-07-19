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

      
 opcao: function(n){
 
      if(n == 1){
        return "programacao";
      } else
      if(n == 2){
        return "arte";
      } else
      if(n == 3){
        return "ad";
      }
},

  
 getSelected: function() {
    if (window.getSelection) {
        return window.getSelection();
    }
    else if (document.getSelection) {
        return document.getSelection();
    }
    else {
        var selection = document.selection && document.selection.createRange();
        if (selection.text) {
            return selection.text;
        }
        return false;
    }
    return false;
},

appendText: function(opc) {
    var str= this.opcao(opc);
    var txt= '[ ]' + this.getSelected() + '; ';
    $('#' + str).append('<p id="item">' + txt + '<button v-on:click="$emit(\'remove\')" class="btn btn-primary btn-xs">X</button></p>');
    this.getSelectionHtml(str);
},
    

           

 

getSelectionHtml: function(identidade) {
   var sel, range, node;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = window.getSelection().getRangeAt(0);
            if(identidade =="programacao"){
            var textohtml = '<span style="background-color:cyan;">' + range + '</span>';
            }
            else if(identidade== "arte"){
            var textohtml = '<span style="background-color:yellow;">' + range + '</span>';
            }
            else if(identidade == "ad"){
            var textohtml = '<span style="background-color:lime;">' + range + '</span>';
            }
            range.deleteContents();
            
            var el = document.createElement("div");
            el.innerHTML = textohtml;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.collapse(false);
        range.pasteHTML(textohtml);
    }
},   
      
  },
  

    
    
  
});
