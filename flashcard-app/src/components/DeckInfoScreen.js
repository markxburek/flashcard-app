import React from 'react'
import DeckPreviewStats from './DeckPreviewStats'

import './DeckInfoScreen.css'
import { connect } from 'react-redux'

const DeckInfoScreen = (props) => {

    props.getData();
    let deckPreviewStatsData = props.data
 
    let deckPreviewStatsPropsData = deckPreviewStatsData.map(deck =>
        <DeckPreviewStats
            key={deck.DECK_NAME}
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

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(getData())
    }
}

const mapStateToProps = state => {
    return {
        data: state.dataHandler.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckInfoScreen);
