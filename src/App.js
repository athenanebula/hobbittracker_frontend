import React, {Component} from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import backgroundImg from './img/green_background.jpg'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            listHabits: []
        }
        this.updateState = this.updateState.bind(this);
    }

    updateState(value){
      let tmp = this.getMapDataListHabits(value)
      this.setState({listHabits: tmp});
      this.changeDesign();
    }

    getMapDataListHabits = data => {
      let tmp = []
      for (let i = 0; i < data.results.length; i++) {
        tmp.push(this.getMapDataHabit(data.results[i]))
      }
      return tmp;
    }

    getMapDataHabit = data => {
      let tmp = []
      for (let i = 0; i <data.check.length; i++) {
        tmp.push(this.getMapDataHabitCheck(data.check[i]))
      }
      let mapped = [
        data._id.$oid,
        data.name,
        data.start.$date,
        data.end.$date,
        data.id_user.$oid,
        tmp
      ]
      return mapped;
    }

    getMapDataHabitCheck = data => {
      const date = data.$date;
      return date;
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
                <Body listHabits = {this.state.listHabits} />
            </div>
        );
    }
}

export default App;