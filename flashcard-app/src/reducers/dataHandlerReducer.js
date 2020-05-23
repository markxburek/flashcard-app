import {DataHandler} from  '../DataHandler'

const dataHandler = new DataHandler();
 
const iniitialState = {data: dataHandler.getData()};

const dataHandlerReducer = (state = iniitialState, action) => {
   switch(action.type){


       case "SET_DECK_TO_STUDY":
          dataHandler.setSelectedDeckData(action.deckName)
          //console.log('SET DECK TO ' +dataHandler.getSelectedDeckData()[0].front)

          return {data: dataHandler.getData()};


       case "GET_DATA":
        
         //   console.log('got to GET_DATA');
         //   console.log(dataHandler.getDeckByName("vocabulary"))

           return {data: dataHandler.getData()};
            
        case "UPDATE_DATA":
          
            // console.log('got to UPDATE_DATA');
    
            dataHandler.updateData(action.index, action.key, action.value);
    
            return {data:  dataHandler.getData()};     
            
         case "INCREMENT_DATA":
            
            // console.log('got to INCREMENT_DATA');

            // console.log(action.key + ' is' + dataHandler.readData(action.index, action.key))
            dataHandler.incrementData(action.index, action.key)
            // console.log('now ' + action.key + ' is' + dataHandler.readData(action.index, action.key))

            return {data:  dataHandler.getData()}; 

         case "INCREMENT_TIMES_SHOWN":
            // console.log('got to INCREMENT_TIMES_SHOWN: index is  ' + action.index);
            dataHandler.incrementTimesShown(action.index)
            return {data:  dataHandler.getData()}; 

         case "INCREMENT_CORRECTLY_ANSWERED":
            dataHandler.incrementCorrectlyAnswered(action.index)
            return {data:  dataHandler.getData()}; 
         
         case "INCORRECTLY_ANSWERED":
            return  {data:  dataHandler.getData()};    






         
           
       default: return iniitialState;
   } 
}

export default dataHandlerReducer;