import {flashCardData, NUMBER_OF_FLASHCARDS} from '../flashCardData';

const getNextIndex = () => Math.floor(Math.random() * NUMBER_OF_FLASHCARDS);
const getNextCard = () => flashCardData[getNextIndex];

const initialState = {frontCardData: getNextCard() };

const getNextFlashCardReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_NEXT_FLASHCARD":
            return {frontCardData: getNextCard()};
             
        default:
            return initialState;

    }
}

export default getNextFlashCardReducer;