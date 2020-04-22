import { flashCardData } from '../flashCardData';

 const updateTimesShown = (index, array) => {
     console.log(`Times ${array[index].front} Shown Before Update: ${array[index].timesShown}`)
    array[index].timesShown++ 
    console.log(`Times ${array[index].front} Shown After Update: ${array[index].timesShown}`)
 } 

let getRandomIndex = (array) =>  Math.floor(Math.random() * (array.length)); 

const removeElement = (index, array) => array.filter(x => array.indexOf(x) !== index);

const getFrontOfFlashCard = (index, array) => array[index].front;

const getBackOfFlashCard = (index, array) => array[index].back;
 

const initializeFlashCardState = (initialFlashCardData) => {
    console.log("initializing flashcard data")

    let currentFlashCardData = [...initialFlashCardData]
    let flashCardIndex = getRandomIndex(currentFlashCardData);
    let frontCard = getFrontOfFlashCard(flashCardIndex, flashCardData); 

    return {
        currentFlashCardData: removeElement(flashCardIndex, initialFlashCardData) ,
        index: flashCardIndex,
        frontCard: frontCard,
        backCard: getBackOfFlashCard(flashCardIndex, initialFlashCardData),
        viewing: frontCard
    }
}
 
const updateFlashCardState = (flashCardstate) => {

    let currentFlashCardData = [...flashCardstate.currentFlashCardData]
    let flashCardIndex = getRandomIndex(currentFlashCardData);
    let frontCard = getFrontOfFlashCard(flashCardIndex, currentFlashCardData);
    let backCard = getBackOfFlashCard(flashCardIndex, currentFlashCardData);

    

    return {
        currentFlashCardData: removeElement(flashCardIndex, currentFlashCardData) ,
        index: flashCardIndex,
        frontCard: frontCard,
        backCard:  backCard,
        viewing: frontCard
    }
};
 

const getNextFlashCardReducer = (state = initializeFlashCardState(flashCardData), action) => {
    switch (action.type) {
        case "GET_NEXT_FLASHCARD":

            let nextFlashCardState = {...state};

            let nextFlashCardArray = [...nextFlashCardState.currentFlashCardData];

            if(nextFlashCardArray.length !== 0){
                nextFlashCardState = updateFlashCardState(nextFlashCardState);

            }else {
                nextFlashCardState.viewing = "no more flash cards left"
            }

            console.log(`GET_NEXT_FLASHCARD: ${nextFlashCardState.frontCard} selected`)

            let frontCardValues = []

            frontCardValues = nextFlashCardArray.forEach(x => console.log(x.front)) 

            return nextFlashCardState;
 

        case "GET_FLASHCARD_ANSWER":
            let flashCardAnswerState = {...state};


    
            console.log(`GET_FLASHCARD_ANSWER: ${flashCardAnswerState.frontCard} selected`)

            let indexArray_answer = [...flashCardAnswerState.currentFlashCardData]
            console.log('index array is ' + indexArray_answer)


            let frontCardValues_answer = []

            frontCardValues_answer = indexArray_answer.forEach(x => console.log(x.front)) 

            flashCardAnswerState.viewing = flashCardAnswerState.backCard;

             

            return flashCardAnswerState
 

        default:
            return state;

    }
}

export default getNextFlashCardReducer;