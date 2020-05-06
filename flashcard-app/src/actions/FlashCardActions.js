export const getNextFlashCard = () => {
    return {
        type: "GET_NEXT_FLASHCARD"
    };
};


export const getFlashCardAnswer = () => {
    return {
        type: "GET_FLASHCARD_ANSWER"
         
    }
}

export const setFlashCardData = (data) => {
    console.log("called setFlashCardData");
    return {
        type: "SET_FLASHCARD_DATA",
        data

    }
}