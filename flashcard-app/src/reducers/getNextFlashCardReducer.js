import {flashCardData, NUMBER_OF_FLASHCARDS} from '../flashCardData';

const getNextIndex = () => Math.floor(Math.random() * NUMBER_OF_FLASHCARDS);
const getNextCard = () => flashCardData[getNextIndex()  ].front;

const getFrontOfFlashCard = (index) => flashCardData[index].front;
const getBackOfFlashCard = (index) => flashCardData[index].back
const initialIndex = getNextIndex();


const initialState = {index: initialIndex,  
                        frontCard: getFrontOfFlashCard(initialIndex), 
                        backCard: getBackOfFlashCard(initialIndex),
                        viewing: getFrontOfFlashCard(initialIndex)
};

const getNextFlashCardReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_NEXT_FLASHCARD":
            let index = getNextIndex();
            let frontCard = getFrontOfFlashCard(index);

            return {index: index, 
                frontCard: frontCard,
                backCard: getBackOfFlashCard(index),
                viewing: frontCard
            };
         
        case "GET_FLASHCARD_ANSWER":
            return { viewing: state.backCard}    
             
        default:
            return initialState;

    }
}

export default getNextFlashCardReducer;