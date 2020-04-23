import React from 'react' 

import FlashCard from '.././components/FlashCard';
import ButtonPanel from '.././components/ButtonPanel.js';
import DeckInfoScreen from '../components/DeckInfoScreen';
import AddCardScreen from '../components/AddCardScreen';
import StatsScreen from '.././components/StatsScreen';

const STUDYING_DECK_SCREEN = <div><FlashCard/><ButtonPanel/></div>
const DECK_INFO_SCREEN = <div><DeckInfoScreen/></div>
const ADD_CARD_SCREEN = <div><AddCardScreen/></div>
const STATS_SCREEN = <div><StatsScreen/></div>

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
        case "GET_ADD_CARD_SCREEN":
            return {
                currentScreen: ADD_CARD_SCREEN
            }
        case "GET_STATS_SCREEN":
            return {
                currentScreen: STATS_SCREEN
            }    

                            
        default: return state;   
    }
}

 

export default screenReducer;

