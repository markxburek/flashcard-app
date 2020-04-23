import React from 'react'
import './DeckInfoScreen.css'

const DeckInfoScreen = (props) => {

    //placeholder variables for now
    let DECK_NAME = "deck name";
    let NEW = 10;
    let LEARNING = 25;
    let TO_REVIEW = 70;
    return (
        <div>

            <h3>{DECK_NAME}</h3>

            <div id="deck-stats-container">
                <div id="deck-stats">
                    {/* put this in a table  */}
                      New: {NEW}  <br />
                      Learning: {LEARNING} <br />
                      To Review: {TO_REVIEW}
                </div>

                <button id="deck-stats-study-now-button">Study Now</button>

            </div>
        </div>
    )
}

export default DeckInfoScreen;



