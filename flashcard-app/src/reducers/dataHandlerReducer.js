const data = [1,2,3];
const iniitialState = {data: data};

const dataHandlerReducer = (state = iniitialState, action) => {
   switch(action.type){
       case "GET_DATA":
           console.log(state)
           let dataCopy = {...state}

       
           console.log('got to GET_DATA');
           console.log(dataCopy)
           
           return {data: dataCopy.data};
       default: return iniitialState;
   } 
}

export default dataHandlerReducer;