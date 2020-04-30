import React from 'react'
import {connect} from 'react-redux'

//let DECK_NAME = "deck name";
// let NEW = "Poo";
let LEARNING = 25;
let TO_REVIEW = 70;

 

const DeckPreviewStats = (props) => {

    let temp = props.getStudyingDeckScreen


    return (
        <div>

            <h3>{props.DECK_NAME}</h3>

            <div id="deck-stats-container">
                <div id="deck-stats">
                    {/* put this in a table  */}
                  New: {props.NEW}  <br />
                  Learning: {props.LEARNING} <br />
                  To Review: {props.TO_REVIEW}
                </div>

                <button id="deck-stats-study-now-button" onClick={ ()=> props.getStudyingDeckScreen(props.DECK_NAME)} >Study Now</button>

            </div>
        </div>

    )
}


const getStudyingDeckScreen = (index) => {
    console.log(index)
    return {
        type: "GET_STUDYING_DECK_SCREEN",
        index
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStudyingDeckScreen: (index) => dispatch(getStudyingDeckScreen(index))

    }
}

export default connect(null, mapDispatchToProps)(DeckPreviewStats);

