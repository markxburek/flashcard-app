 
import React from 'react';
import {flashCardData, NUMBER_OF_FLASHCARDS} from './../flashCardData';

const getNextIndex = () => Math.floor(Math.random() * NUMBER_OF_FLASHCARDS);

const FlashCard = function() {
 
        return(
            <div>
                <p>{flashCardData[getNextIndex()  ].front}</p> 

            </div>    

        );
    
}

export default FlashCard;