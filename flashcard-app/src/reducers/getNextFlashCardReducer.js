import { flashCardData, NUMBER_OF_FLASHCARDS } from '../flashCardData';

//let remainingIndexArray = [...Array(NUMBER_OF_FLASHCARDS).keys()];



//const getNextIndex = () => Math.floor(Math.random() * NUMBER_OF_FLASHCARDS);
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
const initialIndex = getRandomIndex(flashCardData);


const initialState = {
    indexArray: flashCardData,
    index: initialIndex,
    frontCard: getFrontOfFlashCard(initialIndex),
    backCard: getBackOfFlashCard(initialIndex),
    viewing: getFrontOfFlashCard(initialIndex)
};


//const removeElement = index => remainingIndexArray.filter(  element => element !== index); 

const getNextFlashCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_NEXT_FLASHCARD":
            let indexArray = [...state.indexArray];

            let index = getRandomIndex(indexArray);
            let frontCard = getFrontOfFlashCard(index);
            let backCard = getBackOfFlashCard(index);
             
            let viewing = frontCard;

            if(indexArray.length !== 0){
                indexArray = indexArray.filter(x => indexArray.indexOf(x) !== index);

            }else {
                viewing = "no more flash cards left"
            }

            console.log(`start: ${frontCard} selected`)

            let frontCardValues = []

            frontCardValues = indexArray.forEach(x => console.log(x.front)) 
             

 


            return {
                indexArray: indexArray ,
                index: index,
                frontCard: frontCard,
                backCard: backCard,
                viewing: viewing
                //viewing: frontCard
                //viewing:`length: ${indexArray.length}`
            };

        case "GET_FLASHCARD_ANSWER":
    
            console.log(`end: ${state.frontCard} selected`)

            let indexArray_answer = [...state.indexArray]

            let frontCardValues_answer = []

            frontCardValues_answer = indexArray_answer.forEach(x => console.log(x.front)) 

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