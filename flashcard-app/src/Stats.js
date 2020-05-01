class Stats {
    constructor() {
        this.NEW = "NEW";
        this.LEARNING = "LEARNING";
        this.NEEDS_WORK = "NEEDS_WORK";
        this.GOOD = "GOOD";
        this.MASTERED = "MASTERED";

    }
    UpdateAccuracy = (correctlyAnswered, timesShown) => {
        return (correctlyAnswered / timesShown).toFixed(2)
    }


    updateFamiliarity = (accuracy_rate) => {
        if (accuracy_rate < .80) return this.NEEDS_WORK
        else if (accuracy_rate < .95 && accuracy_rate >= .80) return this.GOOD
        else if (accuracy_rate >= .95) return this.MASTERED

    }

    mean = (data) => {

        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        let numberOfEntries = data.length;
        let sumOfEntries = data.reduce(reducer)

        let mean = sumOfEntries / numberOfEntries
     
        return mean;
    }


}


