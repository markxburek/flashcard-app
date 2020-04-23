import React from 'react' 

import FlashCard from '.././components/FlashCard';
import ButtonPanel from '.././components/ButtonPanel.js';
import DeckInfoScreen from '../components/DeckInfoScreen';

const STUDYING_DECK_SCREEN = <div><FlashCard/><ButtonPanel/></div>
const DECK_INFO_SCREEN = <div><DeckInfoScreen/></div>


const currentScreen = {currentScreen: STUDYING_DECK_SCREEN} ;

const screenReducer = (state = currentScreen , action ) => {
    switch(action.type){
        case "GET_STUDYING_DECK_SCREEN":
            return  {
                currentScreen: STUDYING_DECK_SCREEN
            }

        case "GET_DECK_INFO_SCREEN":

        console.log('deck info screen')
            return {
                currentScreen: DECK_INFO_SCREEN
            }
                            
        default: return state;   
    }
}

 

export default screenReducer;

