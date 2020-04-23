import React from 'react'
 

import {connect} from 'react-redux' 

 
import ScreenNavbar from './ScreenNavbar';

 
const getStudyingDeckScreen = () => {
    return {
        type: "GET_STUDYING_DECK_SCREEN"
    } 
}

const SwitchScreen = (props) => {
    return (
        <div>
            <ScreenNavbar />
            {props.currentScreen}
 
        </div>
    );
}

const mapStateToProps = state => {
    return {
        currentScreen: state.switchScreen.currentScreen

    }
}

const mapDispatchToProps = dispatch => {
    return {
        getStudyingDeckScreen: () => dispatch(getStudyingDeckScreen())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SwitchScreen);

