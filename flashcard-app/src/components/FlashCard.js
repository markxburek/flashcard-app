import React from 'react';
import './FlashCard.css';
import { connect } from 'react-redux';



const FlashCard = function (props) {

    return (
        <div id="flashcard-container">
            <p>{props.viewing}</p>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        frontCard: state.flashCard.frontCard,
        viewing: state.flashCard.viewing

    }
}

export default connect(mapStateToProps)(FlashCard);