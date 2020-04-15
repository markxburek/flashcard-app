import React from 'react';
import {flashCardData, NUMBER_OF_FLASHCARDS} from './../flashCardData';
import { connect } from 'react-redux';

const getNextIndex = () => Math.floor(Math.random() * NUMBER_OF_FLASHCARDS);

const FlashCard = function(props) {
 
        return(
            <div>
                <p>{props.frontCard}</p> 
            </div>    
        );    
}

const mapStateToProps = state =>{
    return{
        frontCard: state.frontCard
    }
}

export default connect(mapStateToProps)(FlashCard);