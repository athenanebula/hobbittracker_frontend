import React, {Component} from 'react'
import Header from './Header/Header'
import Body from './Body/Body'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        userID: '',
        listHabits: []
    }
    this.updateState = this.updateState.bind(this);
    this.getListHabits = this.getListHabits.bind(this);
  }

  updateState(value){
      this.setState({userID: value});
      this.getListHabits(value);
  }

  getListHabits(id) {
    let userID = this.state.userID
        const URLF = `https://hobbittrackback.herokuapp.com/get_person_data?_id=${userID}`;

        fetch(URLF).then(res =>{return res.json()})
        .then(res=>{
          //this.props.updateState(res)
          //console.log(res);
          this.setState({listHabits: res});
          //console.log(this.state.listHabits)
        })
        .catch(function (error) {
            alert("Login or password is wrong! 2")
            console.log('Request failed 2', error)
        });
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