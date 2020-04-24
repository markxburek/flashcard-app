import React from 'react'
import DeckPreviewStats from './DeckPreviewStats'
 
import './DeckInfoScreen.css'

let deckPreviewStatsData = [ 
    {DECK_NAME: "deck1", NEW: 10, LEARNING: 25, TO_REVIEW: 70},
    {DECK_NAME: "deck2", NEW: 15, LEARNING: 13, TO_REVIEW: 42}
]



let deckPreviewStats = deckPreviewStatsData.map(deck => 
                                <DeckPreviewStats DECK_NAME={deck.DECK_NAME}
                                                  NEW = {deck.NEW}
                                                  LEARNING = {deck.LEARNING}
                                                  TO_REVIEW = {deck.TO_REVIEW}
                                                  />)
const DeckInfoScreen = (props) => {

    return (
        <div>            
            {deckPreviewStats}             
        </div>
    )
}
 
 export default DeckInfoScreen;

