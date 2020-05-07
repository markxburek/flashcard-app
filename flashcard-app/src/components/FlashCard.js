import React from 'react';
import './FlashCard.css';
import { connect } from 'react-redux';



const FlashCard = function (props) {

    return (
        <div id="flashcard-container">
            <h3>{props.deckName}</h3>
            <p>{props.viewing}</p>

        </div>
    );
}

const mapStateToProps = state => {
    return {
        frontCard: state.flashCard.frontCard,
        viewing: state.flashCard.viewing,
        data: state.dataHandler.data

    }
}

export default connect(mapStateToProps)(FlashCard);