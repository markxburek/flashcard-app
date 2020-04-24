import React from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import getNextFlashCardReducer from './../reducers/getNextFlashCardReducer'
import buttonStateReducer from './../reducers/buttonStateReducer'
import screenReducer from './../reducers/screenReducer'
import dataHandlerReducer from './../reducers/dataHandlerReducer'
 
import './App.css';
 
import SwitchScreen from './SwitchScreen.js'
 


const rootReducer = combineReducers({
  buttonPanel: buttonStateReducer,
  flashCard: getNextFlashCardReducer,
  switchScreen: screenReducer,
  dataHandler: dataHandlerReducer
});


export const store = createStore(rootReducer);
 


function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <SwitchScreen/> 
      </Provider>
    </div>
  );
}

export default App;

 
