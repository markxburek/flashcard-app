import React from 'react';
 
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import {getNextFlashCard} from './../actions'
import getNextFlashCardReducer from './../reducers/getNextFlashCardReducer'

import FlashCard from './FlashCard';
import ButtonPanel from './ButtonPanel.js';
import './App.css';

const store = createStore(getNextFlashCardReducer);
//const Provider = ReactRedux.Provider;


function App() {


  return (
    <div className="App">
      <Provider store={store}>
        <FlashCard />
        <ButtonPanel />

      </Provider>



    </div>
  );
}

export default App;
