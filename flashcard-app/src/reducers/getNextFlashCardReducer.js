import { flashCardData } from '../flashCardData';

 

let getRandomIndex = (array) =>  Math.floor(Math.random() * (array.length)); 

const removeElement = (index, array) => array.filter(x => array.indexOf(x) !== index);

const getFrontOfFlashCard = (index, array) => array[index].front;

const getBackOfFlashCard = (index, array) => array[index].back;

const createIndexArray = (low, high) =>{
    let indexArray = [];
    for (let i = low; i <= high; i++) {
        indexArray.push(i);
    }
    return indexArray;
}

 

const initializeFlashCardState = (initialFlashCardData) => {
    console.log("initializing flashcard data")


    let currentFlashCardData = [...initialFlashCardData]

    let indexArray = createIndexArray(0,4);
    let indexToDelete = getRandomIndex(indexArray);
    let flashCardIndex = indexArray[indexToDelete] 

    //let flashCardIndex = getRandomIndex(currentFlashCardData);
    let frontCard = getFrontOfFlashCard(flashCardIndex, initialFlashCardData); 

    return {
        currentFlashCardData:  currentFlashCardData ,
        index: flashCardIndex,
        frontCard: frontCard,
        backCard: getBackOfFlashCard(flashCardIndex, initialFlashCardData),
        viewing: frontCard,
        indexArray: removeElement(indexToDelete, indexArray)
    }
}
 
const updateFlashCardState = (flashCardstate) => {

    let currentFlashCardData = [...flashCardstate.currentFlashCardData]


    let indexArray = [...flashCardstate.indexArray];
    let indexToDelete = getRandomIndex(indexArray);
    let flashCardIndex = indexArray[indexToDelete] 


     
    let frontCard = getFrontOfFlashCard(flashCardIndex, currentFlashCardData);
    let backCard = getBackOfFlashCard(flashCardIndex, currentFlashCardData);

    

    return {
        currentFlashCardData:  currentFlashCardData ,
        index: flashCardIndex,
        frontCard: frontCard,
        backCard:  backCard,
        viewing: frontCard,
        indexArray: removeElement(indexToDelete, indexArray)
    }
};
 

const getNextFlashCardReducer = (state = initializeFlashCardState(flashCardData), action) => {
    switch (action.type) {

        case "SET_FLASHCARD_DATA": 

            let myData = initializeFlashCardState(action.data)
            console.log('got to SET_FLASHCARD_DATA')
            //console.log('uploaded data is ' + action.data[0].front)
            console.log('here is mydata '  +Object.keys(  myData))


            return myData;

        case "GET_NEXT_FLASHCARD":

            let nextFlashCardState = {...state};

            let nextFlashCardIndexArray = [...nextFlashCardState.indexArray];

            if(nextFlashCardIndexArray.length !== 0){
                nextFlashCardState = updateFlashCardState(nextFlashCardState);

            }else {
                nextFlashCardState.viewing = "no more flash cards left"
            }
 
            return nextFlashCardState;
 

        case "GET_FLASHCARD_ANSWER":
            let flashCardAnswerState = {...state};
 
            let indexArray_answer = [...flashCardAnswerState.currentFlashCardData]

            let frontCardValues_answer = []

            frontCardValues_answer = indexArray_answer.forEach(x => console.log(x.front)) 

            console.log(flashCardAnswerState.indexArray.length)

            if(flashCardAnswerState.indexArray.length !== 0){
                flashCardAnswerState.viewing = flashCardAnswerState.backCard;

            }else{
                flashCardAnswerState.viewing = "no more flash cards left"

            }

            return flashCardAnswerState
 

        default:
            return state;

    }
}

export default getNextFlashCardReducer;