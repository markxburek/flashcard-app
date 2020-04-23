import React from 'react'

import {connect} from 'react-redux'

 
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

                <button id="deck-stats-study-now-button" onClick={props.getStudyingDeckScreen} >Study Now</button>

            </div>
        </div>
    )
}

const getStudyingDeckScreen = () => {
    return {
        type: "GET_STUDYING_DECK_SCREEN"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStudyingDeckScreen: () => dispatch(getStudyingDeckScreen())

    }
}

export default connect(null, mapDispatchToProps)( DeckInfoScreen);



