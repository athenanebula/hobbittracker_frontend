import React, {Component} from 'react'
import HabitRemove from './HabitRemove';
import './HabitItem.css'

class HabitItem extends Component {

    constructor(props) {
        super(props);
        this.checkedHabit = this.checkedHabit.bind(this);
    }

    checkedHabit() {
        let name = this.props.habit;
        let start = this.getDate(this.props.start);
        let end = this.getDate(this.props.end);
        let user_id = this.props.user_id;
        
        const URLF = `https://hobbittrackback.herokuapp.com/add_check_for_person_habit?_id=${user_id}&name=${name}&start=${start}&end=${end}`

        document.getElementById("spinnerHabits").hidden = false;
        fetch(URLF).then(res => {return res.json()})
            .then(res=> {
                const URLF2 = `https://hobbittrackback.herokuapp.com/get_person_data?_id=${user_id}`

                fetch(URLF2).then(res2 => {return res2.json()})
                .then(res2=> {
                    this.props.updateState(res2, user_id)
                    document.getElementById("spinnerHabits").hidden = true;
                })
                .catch(function (error) {
                    alert("Something is wrong!")
                    console.log('Request failed', error);
                    document.getElementById("spinnerHabits").hidden = true;
                });
            })
            .catch(function (error) {
                alert("Something is wrong!")
                console.log('Request failed', error);
                document.getElementById("spinnerHabits").hidden = true;
            });
    }

    getDate(data) {
        let date = new Date(data);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getUTCFullYear();
        const fixDate = day + '-' + month + '-' + year;
        return fixDate;
    }

    render(){
        const Styles = {
            span: {
                display: 'flex',
                alignItems: 'center'
            }
        }
        return(
            <div>
                <div id="habitItem">
                    <span style={Styles.span}>
                        <input className="custom-checkbox" type="checkbox" id={this.props.index} name="habit" onChange={this.checkedHabit}/> 
                        <label htmlFor={this.props.index}/>
                        <p className="label">{this.props.habit}</p><HabitRemove habit_id={this.props.index} user_id={this.props.user_id} updateState = {this.props.updateState}/>
                    </span>
                </div>
            </div>
        )
    }
}

export default HabitItem