
const buttonState = {isAnswered: false}  ;

const buttonStateReducer = (state =  buttonState, action) => {
    switch(action.type){
        case "GET_NEXT_FLASHCARD":
            return {isAnswered: !buttonState.isAnswered};
        
        default: return buttonState;    
                  
    }
}


 