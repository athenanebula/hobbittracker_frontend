import React, {Component} from 'react'
import Header from './Header/Header'
import Body from './Body/Body'

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
  }

  render () {
    return (
      <div className="App">
        <Header updateState = {this.updateState} />
        <Body listHabits = {this.state.listHabits}/>
      </div>
    );
  }
}

export default App;