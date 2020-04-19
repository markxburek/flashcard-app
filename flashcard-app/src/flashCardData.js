export const NEW = "NEW";
export const LEARNING = "LEARNING";
export const NEEDS_WORK = "NEEDS_WORK";
export const GOOD = "GOOD";
export const MASTERED = "MASTERED";

export const flashCardData = [
    { front: "1+1", back: "2", timesShown: 0, correctlyAnswered: 0, accuracy: 0, familiarity: NEW },
    { front: "1+2", back: "3", timesShown: 0, correctlyAnswered: 0, accuracy: 0, familiarity: NEW },
    { front: "1+3", back: "4", timesShown: 0, correctlyAnswered: 0, accuracy: 0, familiarity: NEW },
    { front: "1+4", back: "5", timesShown: 0, correctlyAnswered: 0, accuracy: 0, familiarity: NEW },
    { front: "1+5", back: "6", timesShown: 0, correctlyAnswered: 0, accuracy: 0, familiarity: NEW }

];

export const NUMBER_OF_FLASHCARDS = flashCardData.length;

const updateAccuracy = (correctlyAnswered, timesShown) => {
    return (correctlyAnswered / timesShown).toFixed(2)
}


const updateFamiliarity = (accuracy_rate) => {
    if (accuracy_rate < .80) return NEEDS_WORK
    else if (accuracy_rate < .95 && accuracy_rate >= .80) return GOOD
    else if (accuracy_rate >= .95) return MASTERED

}

export const updateFlashCardData = () => {
    for (let flashCard of flashCardData) {
        flashCard.accuracy = updateAccuracy(flashCard.correctlyAnswered, flashCard.timesShown)
        flashCard.familiarity = updateFamiliarity(flashCard.accuracy)
    }
}