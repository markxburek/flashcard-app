import React from 'react' 

import FlashCard from '.././components/FlashCard';
import ButtonPanel from '.././components/ButtonPanel.js';

const STUDYING_DECK_SCREEN = <div><FlashCard/><ButtonPanel/></div>


const currentScreen = {currentScreen: STUDYING_DECK_SCREEN} ;

const screenReducer = (state = currentScreen , action ) => {
    switch(action.type){
        case "GET_STUDYING_DECK_SCREEN":
            return  {
                currentScreen: STUDYING_DECK_SCREEN
            }
                            
        default: return state;   
    }
}

 

export default screenReducer;

