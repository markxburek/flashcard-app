import React from 'react';
import './FlashCard.css';
import { connect } from 'react-redux';



const FlashCard = function (props) {

    return (
        <div id="flashcard-container">
            <p>{props.viewing}</p>

            <p>{props.data[0].deckData[0].front}</p>
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