export const getStudyingDeckScreen = (deckName) => {
    console.log(deckName)
    return {
        type: "GET_STUDYING_DECK_SCREEN",
        deckName
    }
}