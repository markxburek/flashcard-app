import './ScreenNavbar.css'
import {connect} from 'react-redux'

import {getBrowseScreen, getDeckInfoScreen, getAddCardScreen, getStatsScreen} from '../actions/ScreenNavbarActions'

import React from 'react'

const ScreenNavbar = (props) => {
    return (
        <div id="screen-navbar-container">
            <div id="decks"><button onClick={props.getDeckInfoScreen} >Decks</button> </div>
            <div id="add"> <button onClick={props.getAddCardScreen}> Add</button>  </div>
            <div id="browse"> <button onClick={props.getBrowseScreen}>Browse</button> </div>
            <div id="stats"> <button onClick={props.getStatsScreen}> Stats </button> </div>
 
        </div>
    )
}

// const getBrowseScreen = () => {
//     return {
//         type: "GET_BROWSE_SCREEN"
//     }
// }

// const getDeckInfoScreen = () => {
//     return {
//         type: "GET_DECK_INFO_SCREEN"
//     }
// }

// const getAddCardScreen = () =>{
//     return {
//         type: "GET_ADD_CARD_SCREEN"
//     }

// }

// const getStatsScreen = () => {
//     return {
//         type: "GET_STATS_SCREEN"
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        getDeckInfoScreen: () => dispatch(getDeckInfoScreen()),
        getAddCardScreen: () => dispatch(getAddCardScreen()),
        getBrowseScreen: () => dispatch(getBrowseScreen()),
        getStatsScreen: () => dispatch(getStatsScreen())


    


    }
}

export default connect(null, mapDispatchToProps)(ScreenNavbar);
