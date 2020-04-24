import React from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import getNextFlashCardReducer from './../reducers/getNextFlashCardReducer'
import buttonStateReducer from './../reducers/buttonStateReducer'
import screenReducer from './../reducers/screenReducer'
 
import './App.css';
import DeckInfoScreen from './DeckInfoScreen';
import SwitchScreen from './SwitchScreen.js'
 


const rootReducer = combineReducers({
  buttonPanel: buttonStateReducer,
  flashCard: getNextFlashCardReducer,
  switchScreen: screenReducer
});


export const store = createStore(rootReducer);


//const store = createStore(getNextFlashCardReducer);
//const Provider = ReactRedux.Provider;


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

 
