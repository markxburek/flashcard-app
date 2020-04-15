import {connect} from 'react-redux'
import React from 'react';
import './ButtonPanel.css';

  

function ButtonPanel(props) { 
      
    // updateButtonPanel(){
    //     this.state.isAnswered === true
    //     ? this.setState({isAnswered: false}) 
    //     : this.setState({isAnswered: true})

        
    // }

    
 

        return(
            <div>
                <button onClick={props.getNextFlashCard}>Change Factoid</button>
            </div>

        );


        // const EDIT_BUTTON =  <button id="edit-button">Edit </button>;
        // const SHOW_ANSWER_BUTTON =  <button id="show-answer-button" onClick={this.updateButtonPanel}>Show Answer </button>;
        // const MORE_BUTTON = <button id="more-button">More</button>;

        // //const MIDDLE_BUTTON = this.handleChange();
    
        // const AGAIN_BUTTON = <button id="again-button" onClick={this.updateButtonPanel}>Again</button>;
        // const GOOD_BUTTON = <button id="good-button" onClick={this.updateButtonPanel}>Good</button>;
        // const EASY_BUTTON = <button id="easy-button" onClick={this.updateButtonPanel}>Easy</button>;

        // if(this.state.isAnswered !== true){
             
        //     return (<div>
        //         <p>  new blue learning red to review green</p>
        //         <div id="button-container">
        //             {EDIT_BUTTON} 
        //            {SHOW_ANSWER_BUTTON}
        //            {MORE_BUTTON}
         
        //         </div>
        
        //     </div>
        //     );

        // }else{
             
        //     return (<div>
        //         <p>  new blue learning red to review green</p>
        //         <div id="button-container">
        //             {EDIT_BUTTON} 
        //            {AGAIN_BUTTON}
        //            {GOOD_BUTTON}
        //            {EASY_BUTTON}
        //            {MORE_BUTTON}
         
        //         </div>
        
        //     </div>
        //     );

        // } 

    

 
 
}

const getNextFlashCard = () => {
    return {
        type: "GET_NEXT_FLASHCARD"
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        getNextFlashCard: () => dispatch(getNextFlashCard())
    }
}

export default connect(null, mapDispatchToProps)(  ButtonPanel);

