const data = [
    { DECK_NAME: "deck1", NEW: 10, LEARNING: 25, TO_REVIEW: 70 },
    { DECK_NAME: "deck2", NEW: 15, LEARNING: 13, TO_REVIEW: 42 },
    { DECK_NAME: "deck3", NEW: 3, LEARNING: 53, TO_REVIEW: 100 }
];
const iniitialState = {data: data};

const dataHandlerReducer = (state = iniitialState, action) => {
   switch(action.type){
       case "GET_DATA":
           console.log(state)
           let dataCopy = {...state}.data

       
           console.log('got to GET_DATA');
           console.log('data is ' + dataCopy[0].DECK_NAME )
           
           return {data: dataCopy};
       default: return iniitialState;
   } 
}

export default dataHandlerReducer;