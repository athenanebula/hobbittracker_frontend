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
      //this.setState({listHabits: [{1: 2},{2: 3}]});
      let tmp = this.mapDataToInterface(value)
      this.setState({listHabits: tmp});
      this.changeDesign();
    }

    mapDataToInterface = data => {
      let tmp = []
      for (let i = 0; i < data.results.length; i++) {
        tmp.push(this.mapDataToHabitsInterface(data.results[i]))
      }
      return tmp;
    }

    mapDataToHabitsInterface = data => {
      const mapped = [
        data._id.$oid,
        data.name,
        data.start.$date,
        data.end.$date,
        data.id_user.$oid,
        5
      ]
      return mapped;
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