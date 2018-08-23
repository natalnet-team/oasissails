module.exports = {


  friendlyName: 'Mostrartodas',


  description: 'Mostrartodas turmas.',


  inputs: {
    //TO DO: PAGINAÇÃO
    //receber skip e limit nos inputs
//     skip:{
//       type: 'number',
//       required: true,
//     },
//     limit:{
//       type: 'number',
//       required: true,
//     },
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var todas = await Turma.find().populate('participantes').populate('admin');
    
    return exits.success({todas: todas});

  }


};
