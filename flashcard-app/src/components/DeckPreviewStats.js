import React from 'react'
import {connect} from 'react-redux'

//let DECK_NAME = "deck name";
// let NEW = "Poo";
let LEARNING = 25;
let TO_REVIEW = 70;

 

const DeckPreviewStats = (props) => {
    return (
        <div>

            <h3>{props.DECK_NAME}</h3>

            <div id="deck-stats-container">
                <div id="deck-stats">
                    {/* put this in a table  */}
                  New: {props.NEW}  <br />
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

export default connect(null, mapDispatchToProps)(DeckPreviewStats);

