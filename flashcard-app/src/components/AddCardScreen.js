import React from 'react'

class AddScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            front: '',
            submitedFront: '',
            back: '',
            submitedBack:''
        };
        this.handleChangeFront = this.handleChangeFront.bind(this);
        this.handleChangeBack = this.handleChangeBack.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeFront(event) {
        this.setState({
            front: event.target.value
        });
    }
    handleChangeBack(event) {
        this.setState({
            back: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            front: '',
            submitedFront: this.state.front,
            submitedBack: this.state.back
        });
    }
    render() {
        return (
            <div>
                <h3> Add Card</h3>
                <form onSubmit={this.handleSubmit}>
                    <p>Front</p>

                    <input value={this.state.front} onChange={this.handleChangeFront} />
                    <p>Back</p>
                    <input value={this.state.back} onChange={this.handleChangeBack} /><br/>


                    <button type='submit'>Submit!</button>
                </form>

                <p>You added:</p>
                <h1>{this.state.submitedFront}</h1>
                <h1>{this.state.submitedBack}</h1>
            </div>
        );
    }
};

export default AddScreen;
