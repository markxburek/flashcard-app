
const currentScreen = {currentScreen: "GET_STUDYING_DECK_SCREEN"} ;

const screenReducer = (state = currentScreen , action ) => {
    switch(action.type){
        case "GET_STUDYING_DECK_SCREEN":
            return Object.assign(
                {...state, 
                    currentScreen:"GET_STUDYING_DECK_SCREEN" 
                }
            )
        default: return state;   
    }
}

 

export default screenReducer;

