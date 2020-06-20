import React, {Component} from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import backgroundImg from './img/green_background.jpg'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            listHabits: [],
            user_id: ''
        }
        this.updateState = this.updateState.bind(this);
    }

    updateState(list, id){
        this.setState({listHabits: list.results});
        this.setState({user_id: id});
        this.changeDesign();
        this.checkCheckedHabit(this.state.listHabits);
    }

    checkCheckedHabit(habits){
        habits.map(habit => {
            let _id = habit._id.$oid;
            habit.check.map(tick => {
                let checkDate = new Date (tick.$date)
                let currentDate = new Date();
                if (checkDate.toDateString() === currentDate.toDateString()) {
                    return document.getElementById(_id).checked = "checked";
                }
            })
        })
    }

    changeDesign(){
        document.body.style.backgroundImage = (`url(${backgroundImg})`);
        document.getElementById("headerWelcome").hidden = false;
        document.getElementById("listHabitsBox").hidden = false;
        document.getElementById("headerInputs").hidden = true;
        document.getElementById("startText").hidden = true;
        document.getElementById("buttonSignIn").hidden = true;
    }

    render () {
        return (
            <div className="App">
                <Header updateState = {this.updateState} />
                <Body listHabits = {this.state.listHabits} user_id={this.state.user_id} updateState = {this.updateState}/>
            </div>
        );
    }
}

export default App;