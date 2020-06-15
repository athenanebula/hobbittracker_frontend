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
      this.setState({listHabits: value});
      this.changeDesign();
  }

  changeDesign(){
    document.body.style.backgroundImage = (`url(${backgroundImg})`);
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