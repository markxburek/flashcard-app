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

//const initialIndex = getRandomIndex(initialArray);

 
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

    let currentFlashCardData = [...flashCardstate.indexArray]
    let flashCardIndex = getRandomIndex(currentFlashCardData);
    let frontCard = getFrontOfFlashCard(flashCardIndex, flashCardData);

    return {
        indexArray: removeElement(flashCardIndex, initialArray) ,
        index: flashCardIndex,
        frontCard: frontCard,
        backCard: getBackOfFlashCard(flashCardIndex, flashCardData),
        viewing: frontCard
    }

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