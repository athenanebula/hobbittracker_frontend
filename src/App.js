import React, {Component} from 'react'
import Header from './Header/Header'
import Body from './Body/Body'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        userID: ''
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState(value){
      this.setState({userID: value});
  }
  render () {
    return (
      <div className="App">
        <Header updateState = {this.updateState} />
        <Body userID = {this.state.userID}/>
      </div>
    );
  }
}

export default App;