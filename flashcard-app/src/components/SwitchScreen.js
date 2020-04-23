import React from 'react'

import {connect} from 'react-redux' 

import FlashCard from './FlashCard';
import ButtonPanel from './ButtonPanel.js';
import ScreenNavbar from './ScreenNavbar';

const STUDYING_DECK_SCREEN = <div><FlashCard /><ButtonPanel /></div>





const getStudyingDeckScreen = () => {
    return {
        type: "GET_STUDYING_DECK_SCREEN"
    }
}

const SwitchScreen = () => {
    return (
        <div>
            <ScreenNavbar />
            {STUDYING_DECK_SCREEN}
 
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

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SwitchScreen);

