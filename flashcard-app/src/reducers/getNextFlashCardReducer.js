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

    let indexArray = [0,1,2,3,4];
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

            console.log(`GET_NEXT_FLASHCARD: ${nextFlashCardState.frontCard} selected`)

            // let frontCardValues = []

            // frontCardValues = nextFlashCardArray.forEach(x => console.log(x.front)) 

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