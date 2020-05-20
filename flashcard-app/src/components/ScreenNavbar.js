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

 

const mapDispatchToProps = (dispatch) => {
    return {
        getDeckInfoScreen: () => dispatch(getDeckInfoScreen()),
        getAddCardScreen: () => dispatch(getAddCardScreen()),
        getBrowseScreen: () => dispatch(getBrowseScreen()),
        getStatsScreen: () => dispatch(getStatsScreen())


    


    }
}

export default connect(null, mapDispatchToProps)(ScreenNavbar);
