
const buttonState = {isAnswered: false}  ;

const buttonStateReducer = (state =  buttonState, action) => {
    switch(action.type){
        case "TOGGLE_BUTTON_PANEL":
            return {isAnswered: !state.isAnswered};
        
        default: return buttonState;    
                  
    }
}

export default buttonStateReducer;


 