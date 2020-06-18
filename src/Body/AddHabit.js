import React, {Component} from 'react'
import "./AddHabit.css"


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
            let text = this.state.newHabit;
            let _id = this.props.user_id;

            console.log(text);
            document.getElementById("addNewHabit").value = '';
            //todo: fetch на добавление
            //request.args.get('_id'),request.args.get('name'),request.args.get('start'), request.args.get('end'))
            //const URLF = `https://hobbittrackback.herokuapp.com/add_person_habit?_id=${}&name=${}&start=${}&end=${}`;
        }
    }

    render(){        
        return(
            <div id="addHabit">
                <input id="addNewHabit" className="new-habit" name="newHabit" placeholder="Add New Habit" onChange={this.handleChange} onKeyPress={this.addNewHabit}></input>
            </div>
        )
    }
}

export default AddHabit