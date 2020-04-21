import { flashCardData } from '../flashCardData';

 

let getRandomIndex = (array) => {
    return Math.floor(Math.random() * (array.length))
}

const removeElement = (index, array) => array.filter(x => array.indexOf(x) !== index)




const getFrontOfFlashCard = (index, array) =>{
    return array[index].front;


};

const getBackOfFlashCard = (index, array) => array[index].back


 

let initialArray = [...flashCardData];
 
 
const initializeFlashCardState = (initialFlashCardData) => {
    console.log("initializing flashcard data")

    let currentFlashCardData = [...initialFlashCardData]
    let flashCardIndex = getRandomIndex(currentFlashCardData);
    let frontCard = getFrontOfFlashCard(flashCardIndex, flashCardData);

    return {
        indexArray: removeElement(flashCardIndex, initialArray) ,
        index: flashCardIndex,
        frontCard: frontCard,
        backCard: getBackOfFlashCard(flashCardIndex, flashCardData),
        viewing: frontCard
    }

}

const initialState = initializeFlashCardState(flashCardData);
 

const updateFlashCardState = (flashCardstate) => {

    let indexArray = [...flashCardstate.indexArray]
    let flashCardIndex = getRandomIndex(indexArray);
    let frontCard = getFrontOfFlashCard(flashCardIndex, indexArray);
    let backCard = getBackOfFlashCard(flashCardIndex, indexArray);

    return {
        indexArray: removeElement(flashCardIndex, indexArray) ,
        index: flashCardIndex,
        frontCard: frontCard,
        backCard:  backCard,
        viewing: frontCard
    }

};


//const removeElement = index => remainingIndexArray.filter(  element => element !== index); 

const getNextFlashCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_NEXT_FLASHCARD":

            let nextFlashCardState = {...state};

            let nextFlashCardArray = [...nextFlashCardState.indexArray];


            if(nextFlashCardArray.length !== 0){
                nextFlashCardState = updateFlashCardState(nextFlashCardState)
 

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

            let indexArray_answer = [...flashCardAnswerState.indexArray]
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