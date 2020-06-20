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
        let text = this.state.newHabit;
        text = text.trim();
        if (event.key === 'Enter' && text !== '') {
            let user_id = this.props.user_id;

            let start = this.getCurrentDate();
            let end = this.getEndDate();
            const URLF = `https://hobbittrackback.herokuapp.com/add_person_habit?_id=${user_id}&name=${text}&start=${start}&end=${end}`;

            document.getElementById("spinnerHabits").hidden = false;
            document.getElementById("addNewHabit").disabled = true;
            fetch(URLF).then(res => {return res.json()})
            .then(res=> {
                const URLF2 = `https://hobbittrackback.herokuapp.com/get_person_data?_id=${user_id}`
                fetch(URLF2).then(res2 => {return res2.json()})
                .then(res2=> {
                    this.props.updateState(res2, user_id)
                    document.getElementById("spinnerHabits").hidden = true;
                    document.getElementById("addNewHabit").value = '';
                    this.setState({newHabit: ''});
                    document.getElementById("addNewHabit").disabled = false;
                })
                .catch(function (error) {
                    alert("Something is wrong!")
                    console.log('Request failed', error)
                    document.getElementById("spinnerHabits").hidden = true;
                    document.getElementById("addNewHabit").disabled = false;
                });
            })
            .catch(function (error) {
                alert("Something is wrong!")
                console.log('Request failed', error)
                document.getElementById("spinnerHabits").hidden = true;
                document.getElementById("addNewHabit").disabled = false;
            });
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