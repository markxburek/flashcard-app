import {DataHandler} from  '../DataHandler'

const dataHandler = new DataHandler();
// const data = [
//     { DECK_NAME: "deck1", NEW: 10, LEARNING: 25, TO_REVIEW: 70 },
//     { DECK_NAME: "deck2", NEW: 15, LEARNING: 13, TO_REVIEW: 42 },
//     { DECK_NAME: "deck3", NEW: 3, LEARNING: 53, TO_REVIEW: 100 }
// ];
const iniitialState = {data: dataHandler.getData()};

const dataHandlerReducer = (state = iniitialState, action) => {
   switch(action.type){
       case "GET_DATA":
          // console.log(state)
          // let dataCopy = {...state}.data

           console.log('got to GET_DATA');

           return {data: dataHandler.getData()};

        case "UPDATE_LEARNING":
            //console.log(state)
            //let updateLearningDataCopy = {...state}.data

            //action.index

            console.log('got to UPDATE_LEARNING');
            // console.log('deckName: ' + updateLearningDataCopy[0].DECK_NAME + ' LEARNING: ' + updateLearningDataCopy[0].NEW )
            console.log("LEARNING is " +dataHandler.readData(0, "LEARNING") )
            dataHandler.updateData(0, 'LEARNING', 101);
            console.log("LEARNING is now " +dataHandler.readData(0, "LEARNING") )
            return {data:  dataHandler.getData()};            
           
       default: return iniitialState;
   } 
}

export default dataHandlerReducer;