import React from 'react' 

import FlashCard from '.././components/FlashCard';
import ButtonPanel from '.././components/ButtonPanel.js';
import DeckInfoScreen from '../components/DeckInfoScreen';
import AddCardScreen from '../components/AddCardScreen';
import StatsScreen from '.././components/StatsScreen';
import BrowseScreen from '.././components/BrowseScreen';
 
const DECK_INFO_SCREEN = <div><DeckInfoScreen/></div>
const ADD_CARD_SCREEN = <div><AddCardScreen/></div>
const STATS_SCREEN = <div><StatsScreen/></div>
const BROWSE_SCREEN = <div><BrowseScreen/></div>


const currentScreen = {currentScreen: DECK_INFO_SCREEN} ;

const screenReducer = (state = currentScreen, action ) => {
    switch(action.type){
        case "GET_STUDYING_DECK_SCREEN":
            return  {
                currentScreen:  <div><FlashCard deckName ={action.deckName} /><ButtonPanel/></div>,
                deckName: action.deckName
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
        case "GET_BROWSE_SCREEN":
            return {
                currentScreen: BROWSE_SCREEN
            }    

                            
        default: return state;   
    }
}

 

export default screenReducer;

