//Intermediary between components and data
import {flashCardData, multiCardData, vocabData} from './flashCardData'

 
const DECKDATA = "deckData"
const SELECTED_DECK_INDEX = 0;

export class DataHandler {
    constructor(){
        this.data = [ 
            {DECK_NAME: "initialDeck",deckData: flashCardData , NEW: 5, LEARNING: 5, TO_REVIEW: 5, CORRECT: 0, INCORRECT: 0, TIMES_SHOWN: 0},
            {DECK_NAME: "multiplication", deckData: multiCardData, NEW: 15, LEARNING: 13, TO_REVIEW: 42, CORRECT: 0, INCORRECT: 0, TIMES_SHOWN: 0},
            {DECK_NAME: "vocabulary", deckData: vocabData, NEW: 3, LEARNING: 53, TO_REVIEW: 100, CORRECT: 0, INCORRECT: 0, TIMES_SHOWN: 0 }
        ];
        this.selectedDeckData = this.getDeckData(SELECTED_DECK_INDEX); 

        this.getSelectedDeckData = this.getSelectedDeckData.bind(this);
    }
 

    getDeckData(index){
        console.log( 'getDeckData returned' +this.data[index][DECKDATA])
        return this.data[index][DECKDATA];

    }

    getSelectedDeckData(){
        return this.selectedDeckData;
    }



    getData() {
        return this.data;
    }

    createData(newData){
        this.data.push(newData);
    }

    readData(index, key){
        return this.data[index][key];
    }

    updateData(index, key, newData){
        if(index > this.data.length) return undefined;

        this.data[index][key] = newData;
    }
    incrementData(index, key){
        if(index > this.data.length) return undefined;

        this.data[index][key]++;

    }


    deleteData(index){
        this.data.splice(index, 1);
    }
 


}