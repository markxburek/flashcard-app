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

let getRandomIndex = (array) => {
    return Math.floor(Math.random() * (array.length))
}

const removeElement = (index, array) => array.filter(x => array.indexOf(x) !== index)

//initialize on startup 
let indexArray = [...Array(flashCardData.length).keys()]



const getFrontOfFlashCard = (index, array) =>{
    return array[index].front;


};

const getBackOfFlashCard = (index, array) => array[index].back
const initialIndex = getRandomIndex(flashCardData);


const initialState = {
    indexArray: flashCardData,
    index: initialIndex,
    frontCard: getFrontOfFlashCard(initialIndex, flashCardData),
    backCard: getBackOfFlashCard(initialIndex, flashCardData),
    viewing: getFrontOfFlashCard(initialIndex, flashCardData)
};


//const removeElement = index => remainingIndexArray.filter(  element => element !== index); 

const getNextFlashCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_NEXT_FLASHCARD":
            let getNextFlashCardArray = [...state.indexArray];

            let getNextFlashCardIndex;  
            let frontCard ;
            let backCard ;
             
            let viewing ;

            if(getNextFlashCardArray.length !== 0){

                getNextFlashCardIndex = getRandomIndex(getNextFlashCardArray);
                frontCard = getFrontOfFlashCard(getNextFlashCardIndex, getNextFlashCardArray);
                backCard = getBackOfFlashCard(getNextFlashCardIndex, getNextFlashCardArray);
                viewing = frontCard;


                getNextFlashCardArray = getNextFlashCardArray.filter(x => getNextFlashCardArray.indexOf(x) !== getNextFlashCardIndex);


            }else {
                viewing = "no more flash cards left"
            }

            console.log(`GET_NEXT_FLASHCARD: ${frontCard} selected`)

            let frontCardValues = []

            frontCardValues = getNextFlashCardArray.forEach(x => console.log(x.front)) 
             

 


            return {
                indexArray: getNextFlashCardArray ,
                index: getNextFlashCardIndex,
                frontCard: frontCard,
                backCard: backCard,
                viewing: viewing
                //viewing: frontCard
                //viewing:`length: ${indexArray.length}`
            };

        case "GET_FLASHCARD_ANSWER":
    
            console.log(`GET_FLASHCARD_ANSWER: ${state.frontCard} selected`)

            let indexArray_answer = [...state.indexArray]
            console.log('index array is ' + indexArray_answer)


            let frontCardValues_answer = []

            frontCardValues_answer = indexArray_answer.forEach(x => console.log(x.front)) 

            return {
                indexArray: indexArray_answer ,
                index: -1,
                frontCard: state.frontCard,
                backCard: state.backCard,
                viewing: state.backCard
                //viewing: frontCard
                //viewing:`length: ${indexArray.length}`
            };

        default:
            return state;

    }
}

export default getNextFlashCardReducer;