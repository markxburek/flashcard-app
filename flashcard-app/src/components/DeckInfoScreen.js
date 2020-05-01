import React from 'react'
import DeckPreviewStats from './DeckPreviewStats'

import './DeckInfoScreen.css'
import { connect } from 'react-redux'

const DeckInfoScreen = (props) => {

    props.getData();
    let deckPreviewStatsData = props.data

    //updateLearning
    props.updateData(0, "LEARNING", 625)
    props.incrementData(0, "TIMES_SHOWN");
 
    let deckPreviewStatsPropsData = deckPreviewStatsData.map((deck, index)=>
        <DeckPreviewStats
            key={index}
            index={index} 
            DECK_NAME={deck.DECK_NAME}
            NEW={deck.NEW}
            LEARNING={deck.LEARNING}
            TO_REVIEW={deck.TO_REVIEW}
        />)

 
    return (
        <div>
            {deckPreviewStatsPropsData}
            {'deckname is ' + props.data[0].DECK_NAME}
        </div>
    )
}

const getData = () => {
    return {
        type: "GET_DATA"
    }
}

const updateData = (index, key, value) => {
    return {
        type: "UPDATE_DATA",
        index,
        key,
        value
    }
}

const incrementData = (index, key) => {
    return {
        type: "INCREMENT_DATA",
        index,
        key 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(getData()),
        updateData: (index, key, value) => dispatch(updateData(index, key, value)),
        incrementData: (index, key) => dispatch(incrementData(index, key))
    }
}

const mapStateToProps = state => {
    return {
        data: state.dataHandler.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckInfoScreen);
