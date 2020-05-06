export const incrementTimesShown = (index) => {
    return {
        type: "INCREMENT_TIMES_SHOWN",
        index

    }
}

export const incrementCorrectlyAnswered = (index) => {
    return {
        type: "INCREMENT_CORRECTLY_ANSWERED",
        index
    }
}

export const incorrectlyAnswered = () => {
    return {
        type: "INCORRECTLY_ANSWERED"
    }
}

export const getData = () => {
    return {
        type: "GET_DATA"
    }
}

export const updateData = (index, key, value) => {
    return {
        type: "UPDATE_DATA",
        index,
        key,
        value
    }
}

export const incrementData = (index, key) => {
    return {
        type: "INCREMENT_DATA",
        index,
        key 
    }
}

export const setDeckToStudy = (deckName) => {
    return {
        type: "SET_DECK_TO_STUDY",
        deckName
    }
}
