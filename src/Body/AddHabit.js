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

            document.getElementById("addNewHabit").value = '';
            let start = this.getCurrentDate();
            let end = this.getEndDate();
            //todo: fetch на добавление
            //request.args.get('_id'),request.args.get('name'),request.args.get('start'), request.args.get('end'))
            const URLF = `https://hobbittrackback.herokuapp.com/add_person_habit?_id=${_id}&name=${text}&start=${start}&end=${end}`;
        }
    }

    getEndDate(){
        const now = new Date();
        const day = now.getDate() + 21;
        const month = now.getMonth() + 1;
        const year = now.getUTCFullYear();
        const end = new Date(year, month, day);
        const endString = end.getDate() + '-' + end.getMonth() + '-' + end.getUTCFullYear();
        return endString;
    }

    getCurrentDate(){
        const now = new Date();
        const day = now.getDate();
        const month = now.getMonth() + 1;
        const year = now.getUTCFullYear();
        const currentDate = day + '-' + month + '-' + year;
        return currentDate;
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