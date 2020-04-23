import './ScreenNavbar.css'
import {connect} from 'react-redux'

import React from 'react'

const ScreenNavbar = (props) => {
    return (
        <div id="screen-navbar-container">
            <div id="decks"><button onClick={props.getDeckInfoScreen} >Decks</button> </div>
            <div id="add">Add</div>
            <div id="browse">Browse</div>
            <div id="stats">Stats</div>
 
        </div>
    )
}

const getDeckInfoScreen = () => {
    return {
        type: "GET_DECK_INFO_SCREEN"
    }
}

const mapPropsToDispatch = (dispatch) => {
    return {
        getDeckInfoScreen: () => dispatch(getDeckInfoScreen())


    }
}

export default connect(null, mapPropsToDispatch)(ScreenNavbar);
