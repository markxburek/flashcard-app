import React from 'react'
import {connect} from 'react-redux'

import {getNextFlashCard, getFlashCardAnswer } from '../actions/FlashCardActions';

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
                <p>{props.data[0].deckData[0].front}</p>

                <button id="deck-stats-study-now-button" onClick={ 
                    ()=> props.getStudyingDeckScreen(props.DECK_NAME, props.data[0].deckData[0].front)} >Study Now</button>

            </div>
        </div>

    )
}

const setFlashCardData = (data) => {
    console.log("called setFlashCardData");
    return {
        type: "SET_FLASHCARD_DATA",
        data

    }
}


const getStudyingDeckScreen = (deckName) => {
    console.log(deckName)
    return {
        type: "GET_STUDYING_DECK_SCREEN",
        deckName
    }
}

const mapStateToProps = state => {
    return {
        data: state.dataHandler.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStudyingDeckScreen: (deckName, data) => {
            dispatch(getStudyingDeckScreen(deckName));
            dispatch(setFlashCardData(data))


        }  

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckPreviewStats);

