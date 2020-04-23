import React from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import getNextFlashCardReducer from './../reducers/getNextFlashCardReducer'
import buttonStateReducer from './../reducers/buttonStateReducer'
import FlashCard from './FlashCard';
import ButtonPanel from './ButtonPanel.js';
import ScreenNavbar from './ScreenNavbar';
import './App.css';
import DeckInfoScreen from './DeckInfoScreen';

const rootReducer = combineReducers({
  buttonPanel: buttonStateReducer,
  flashCard: getNextFlashCardReducer
});
export const store = createStore(rootReducer);
//const store = createStore(getNextFlashCardReducer);
//const Provider = ReactRedux.Provider;


function App() {


  return (
    <div className="App">
      <Provider store={store}>
        <ScreenNavbar/> 
        <FlashCard />
        <ButtonPanel />

      </Provider>



    </div>
  );
}

export default App;
