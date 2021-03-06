import { connect } from 'react-redux'
import React from 'react';
import './ButtonPanel.css';
import { getNextFlashCard, getFlashCardAnswer } from '../actions/FlashCardActions';
import {incrementTimesShown, incrementCorrectlyAnswered, incorrectlyAnswered} from '../actions/DataHandlerActions';
import { toggleButtonPanel } from '../actions/ButtonPanelActions'




function ButtonPanel(props) {

    const EDIT_BUTTON = <button id="edit-button">Edit </button>;
    const SHOW_ANSWER_BUTTON = <button id="show-answer-button" onClick={() => {

        props.getFlashCardAnswer(props.index)
    }}>Show Answer  </button>;
    const MORE_BUTTON = <button id="more-button">More</button>;
    const QUESTION_BUTTON_PANEL =
        <div id="button-container"> {EDIT_BUTTON}{SHOW_ANSWER_BUTTON}{MORE_BUTTON}</div>


    const AGAIN_BUTTON = <button id="again-button" onClick={() => props.incorrectlyAnswered()}>Again</button>;
    const GOOD_BUTTON = <button id="good-button" onClick={ () => props.correctlyAnswered(props.index)}>Good</button>;
    const EASY_BUTTON = <button id="easy-button" onClick={props.getNextFlashCard}>Easy</button>;

    const CARDS_LEFT = <p>new blue learning red to review green</p>;

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


 


const mapStateToProps = state => {
    return {
        isAnswered: state.buttonPanel.isAnswered,
        index: state.flashCard.index
    }
}



const mapDispatchToProps = dispatch => {
    return {

        correctlyAnswered: (index) => {

             
            dispatch(getNextFlashCard())             
            dispatch(toggleButtonPanel())
            dispatch(incrementCorrectlyAnswered(index))

        },
        incorrectlyAnswered: ( ) => {

             
            dispatch(getNextFlashCard())             
            dispatch(toggleButtonPanel())
            dispatch(incorrectlyAnswered())
           
        },


        getNextFlashCard: () => { dispatch(getNextFlashCard()) },

        getFlashCardAnswer: (index) => {

            dispatch(getFlashCardAnswer())
            dispatch(incrementTimesShown(index))
            dispatch(toggleButtonPanel())
            //dispatch(incrementTimesShown())                     
        },
        toggleButtonPanel: () => dispatch(toggleButtonPanel())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonPanel);

