//Intermediary between components and data
import {flashCardData} from './flashCardData'

export class DataHandler {
    constructor(){
        this.data = [ 
            {DECK_NAME: "deck1", NEW: 10, LEARNING: 25, TO_REVIEW: 70},
            {DECK_NAME: "deck2", NEW: 15, LEARNING: 13, TO_REVIEW: 42}
        ]; 
    }

    getData() {
        return this.data;
    }

    createData(newData){
        this.data.push(newData);
    }

    readData(index){
        return this.data[index];
    }

    updateData(index, newData){
        if(index > this.data.length) return undefined;

        this.data[index] = newData;
    }

    deleteData(index){
        this.data.splice(index, 1);
    }



}