import React from 'react';
 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
//import {getNextFlashCard} from './../actions'
import getNextFlashCardReducer from './../reducers/getNextFlashCardReducer'
import buttonStateReducer from './../reducers/buttonStateReducer'
import FlashCard from './FlashCard';
import ButtonPanel from './ButtonPanel.js';
import './App.css';

const rootReducer = combineReducers({
  buttonPanel: buttonStateReducer,
  flashCard: getNextFlashCardReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
//const store = createStore(getNextFlashCardReducer);
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
