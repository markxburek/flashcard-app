import React from 'react'
import DeckPreviewStats from './DeckPreviewStats'
 
import './DeckInfoScreen.css'
import { connect } from 'react-redux'

let deckPreviewStatsData = [ 
    {DECK_NAME: "deck1", NEW: 10, LEARNING: 25, TO_REVIEW: 70},
    {DECK_NAME: "deck2", NEW: 15, LEARNING: 13, TO_REVIEW: 42}
];
 



let deckPreviewStats = deckPreviewStatsData.map(deck => 
                                <DeckPreviewStats DECK_NAME={deck.DECK_NAME}
                                                  NEW = {deck.NEW}
                                                  LEARNING = {deck.LEARNING}
                                                  TO_REVIEW = {deck.TO_REVIEW}
                                                  />)


                                                  
const DeckInfoScreen = (props) => {
      props.getData();
      let test = {...props.data}
      console.log(test[0])



    return (
        <div>            
            {deckPreviewStats}    
            {props.data}         
        </div>
    )
}

const getData = () => {
    return {
        type: "GET_DATA"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(getData())
    }
}

const mapStateToProps = state=> {
    return {
        data: state.dataHandler.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckInfoScreen);

// export default connect(null, mapDispatchToProps)(DeckInfoScreen);

