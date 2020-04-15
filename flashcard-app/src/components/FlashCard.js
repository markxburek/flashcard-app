
import React from 'react';
import { flashCardData, NUMBER_OF_FLASHCARDS } from './../flashCardData';
import { connect } from 'react-redux';

const getNextIndex = () => Math.floor(Math.random() * NUMBER_OF_FLASHCARDS);



const FlashCard = function (props) {

    return (
        <div>
            <p>{props.frontCardData}</p>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        frontCardData: state.frontCardData
    }
}

export default connect(mapStateToProps)(FlashCard);