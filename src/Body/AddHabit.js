import React, {Component} from 'react'


class AddHabit extends Component {

    constructor(props){
        super(props);
        this.state = {
            newHabit: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.addNewHabit = this.addNewHabit.bind(this);
    }

    handleChange(event) {
        this.setState({newHabit: event.target.value});
    }

    addNewHabit(event) {
        if (event.key === 'Enter' && this.state.newHabit !== '') {
            //todo: fetch на добавление
            console.log(this.state.newHabit);
        }
    }

    render(){        
        return(
            <div id="addHabit">
                <input id="addNewHabit" name="newHabit" placeholder="Add New Habit" onChange={this.handleChange} onKeyPress={this.addNewHabit}></input>
            </div>
        )
    }
}

export default AddHabit