import {connect} from 'react-redux'
import React from 'react';
import './ButtonPanel.css';

  

function ButtonPanel(props) { 
      
    // updateButtonPanel(){
    //     this.state.isAnswered === true
    //     ? this.setState({isAnswered: false}) 
    //     : this.setState({isAnswered: true})

        
    // }

    
 

 


        const EDIT_BUTTON =  <button id="edit-button">Edit </button>;
        const SHOW_ANSWER_BUTTON =  <button id="show-answer-button" onClick={props.getNextFlashCard}>Show Answer </button>;
        const MORE_BUTTON = <button id="more-button">More</button>;

        //const MIDDLE_BUTTON = this.handleChange();
    
        const AGAIN_BUTTON = <button id="again-button" onClick={props.getNextFlashCard}>Again</button>;
        const GOOD_BUTTON = <button id="good-button" onClick={props.getNextFlashCard}>Good</button>;
        const EASY_BUTTON = <button id="easy-button" onClick={props.getNextFlashCard}>Easy</button>;

        if(props.isAnswered !== true){
             
            return (<div>
                <p>  new blue learning red to review green</p>
                <div id="button-container">
                    {EDIT_BUTTON} 
                   {SHOW_ANSWER_BUTTON}
                   {MORE_BUTTON}
         
                </div>
        
            </div>
            );

        }else{
             
            return (<div>
                <p>  new blue learning red to review green</p>
                <div id="button-container">
                    {EDIT_BUTTON} 
                   {AGAIN_BUTTON}
                   {GOOD_BUTTON}
                   {EASY_BUTTON}
                   {MORE_BUTTON}
         
                </div>
        
            </div>
            );

        } 

        // return(
        //     <div>
        //         <button onClick={props.getNextFlashCard}>Change Factoid {props.isAnswered.toString()}</button>
        //     </div>

        // );

 
 
}

const getNextFlashCard = () => {
    return {
        type: "GET_NEXT_FLASHCARD"
    };
};

const mapStateToProps = state => {
    return {
        isAnswered: state.buttonPanel.isAnswered
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getNextFlashCard: () => dispatch(getNextFlashCard())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(  ButtonPanel);

