import React from 'react'
import {connect} from 'react-redux'

import {setDeckToStudy} from '../actions/DataHandlerActions'
import {getStudyingDeckScreen} from '../actions/ScreenActions'
import {setFlashCardData } from '../actions/FlashCardActions';

 

const DeckPreviewStats = (props) => {

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
     
                <button id="deck-stats-study-now-button" onClick={ 
                    ()=> props.getStudyingDeckScreen(props.DECK_NAME, props.data[props.index].deckData)} >Study Now</button>

            </div>
        </div>

    )
}

 
const mapStateToProps = state => {
    return {
        data: state.dataHandler.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStudyingDeckScreen: (deckName, data) => {
            dispatch(setDeckToStudy(deckName))
            dispatch(setFlashCardData(data))
            dispatch(getStudyingDeckScreen(deckName));
             


        }  

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckPreviewStats);

