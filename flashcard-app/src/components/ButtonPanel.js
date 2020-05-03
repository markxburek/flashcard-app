import { connect } from 'react-redux'
import React from 'react';
import './ButtonPanel.css';
import {getNextFlashCard, getFlashCardAnswer } from '../actions/FlashCardActions';
import {toggleButtonPanel} from '../actions/ButtonPanelActions'
import getNextFlashCardReducer from '../reducers/getNextFlashCardReducer';



function ButtonPanel(props) {

    const EDIT_BUTTON = <button id="edit-button">Edit </button>;
const SHOW_ANSWER_BUTTON = <button id="show-answer-button" onClick={props.getFlashCardAnswer}>Show Answer {props.index}</button>;
    const MORE_BUTTON = <button id="more-button">More</button>;
    const QUESTION_BUTTON_PANEL =
        <div id="button-container"> {EDIT_BUTTON}{SHOW_ANSWER_BUTTON}{MORE_BUTTON}</div>
 

    const AGAIN_BUTTON = <button id="again-button" onClick={props.getNextFlashCard}>Again</button>;
    const GOOD_BUTTON = <button id="good-button" onClick={props.getNextFlashCard}>Good</button>;
    const EASY_BUTTON = <button id="easy-button" onClick={props.getNextFlashCard}>Easy</button>;

    const CARDS_LEFT = <p>new blue learning red to review green</p>  ;

    const ANSWER_BUTTON_PANEL =
        <div id="button-container">
            {EDIT_BUTTON}
            {AGAIN_BUTTON}
            {GOOD_BUTTON}
            {EASY_BUTTON}
            {MORE_BUTTON}
        </div>


    if (props.isAnswered !== true) {     

        return (<div>
             
            {QUESTION_BUTTON_PANEL}
        </div>
        );

    } else {
    
        return (<div>
             
            {ANSWER_BUTTON_PANEL}

        </div>
        );
    }

}

 
const incrementTimesShown = (index) => {
    return {
        type: "INCREMENT_TIMES_SHOWN",
        index
    }
}

const mapStateToProps = state => {
    return {
        isAnswered: state.buttonPanel.isAnswered,
        index: state.flashCard.index
    }
}

 

const mapDispatchToProps = dispatch => {
    return {
        getNextFlashCard: () => {dispatch(getNextFlashCard())},
        getFlashCardAnswer: () => {
            dispatch(getFlashCardAnswer())
            dispatch(toggleButtonPanel())                        
        },
        toggleButtonPanel: ()=> dispatch(toggleButtonPanel())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonPanel);

