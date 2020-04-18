import { flashCardData, NUMBER_OF_FLASHCARDS } from '../flashCardData';

//let remainingIndexArray = [...Array(NUMBER_OF_FLASHCARDS).keys()];



const getNextIndex = () => Math.floor(Math.random() * NUMBER_OF_FLASHCARDS);
// const getNextIndex = () => {
//     let index = Math.floor(Math.random() * NUMBER_OF_FLASHCARDS); 
//     while( flashCardData[index ].timesShown !== 0){
//         index = Math.floor(Math.random() * NUMBER_OF_FLASHCARDS);
//     }
//     return index;

// }

let getRandomIndex = (indexArray) => {
    return Math.floor(Math.random() * (indexArray.length))
}

const removeElement = index => indexArray.filter(x => indexArray.indexOf(x) !== index)

//initialize on startup 
let indexArray = [...Array(flashCardData.length).keys()]



const getFrontOfFlashCard = (index) => flashCardData[index].front;
const getBackOfFlashCard = (index) => flashCardData[index].back
const initialIndex = getNextIndex();


const initialState = {
    indexArray: indexArray,
    index: initialIndex,
    frontCard: getFrontOfFlashCard(initialIndex),
    backCard: getBackOfFlashCard(initialIndex),
    viewing: getFrontOfFlashCard(initialIndex)
};


//const removeElement = index => remainingIndexArray.filter(  element => element !== index); 

const getNextFlashCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_NEXT_FLASHCARD":

            let index = getNextIndex();
            let frontCard = getFrontOfFlashCard(index);
            let backCard = getBackOfFlashCard(index);
            let indexArray = state.indexArray;
            indexArray.pop();


            return {
                indexArray: indexArray ,
                index: index,
                frontCard: state.frontCard,
                backCard: backCard,
                viewing: indexArray.toString()
                //viewing: Object.keys(state)
            };

        case "GET_FLASHCARD_ANSWER":
            return Object.assign(
                state,
                {
                    
                    viewing: state.backCard
                    //viewing: Object.keys(state)
                }

            )

        default:
            return state;

    }
}

export default getNextFlashCardReducer;