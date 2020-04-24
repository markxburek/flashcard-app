const data = [1,2,3];

const dataHandlerReducer = (state = data, action) => {
   switch(action.type){
       case "GET_DATA":
           let dataCopy = {...state}.data

       
           console.log('got to GET_DATA');
           console.log(dataCopy)
           
           return {data: data};
       default: return data;
   } 
}

export default dataHandlerReducer;