import {flashCardData, NUMBER_OF_FLASHCARDS} from '../flashCardData';

const getNextIndex = () => Math.floor(Math.random() * NUMBER_OF_FLASHCARDS);
const getNextCard = () => flashCardData[getNextIndex()  ].front;

const initialState = {frontCard: getNextCard() };

const getNextFlashCardReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_NEXT_FLASHCARD":
            return {frontCard: getNextCard()};
             
        default:
            return initialState;

    }
}

export default getNextFlashCardReducer;