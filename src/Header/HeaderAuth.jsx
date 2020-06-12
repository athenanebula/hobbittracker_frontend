import React, {Component} from 'react'

class HeaderAuth extends Component {


    constructor(props){
        super(props);
        this.state = {
            login: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        if (event.currentTarget.name === 'login') {this.setState({login: event.target.value});}
        else {this.setState({password: event.target.value});};
      }

    handleClick(event){
        let login = this.state.login
        let password = this.state.password
        const URLF = `https://hobbittrackback.herokuapp.com/authorization?login=${login}&password=${password}`;

        fetch(URLF).then(res =>
            {
                return res.json()
            })
            .then(res=>{
                this.props.updateState(res)

            })
        .catch(function (error) {
            console.log('Request failed', error)
            });
    }
    render(){
        const Styles = {
            button: {
                backgroundColor: '#a67f58',
                borderRadius: 8,
                border: 4,
                width: 100,
                height: 35,
                color: '#FFF8DC',
                marginTop: 5,
                marginLeft: 5,
                marginRight: 5,
                outline: 0,
                outlineOffset: 0,
                fontSize: 22
            },
    
            input: {
                backgroundColor: '#adab98',
                borderRadius: 8,
                border: 4,
                height: 35,
                marginTop: 5,
                marginLeft: 5,
                marginRight: 5,
                outline: 0,
                outlineOffset: 0,
                fontSize: 22
            }
        }
    return(
        <div>
            <input name='login' placeholder='login' style={Styles.input} value={this.state.login} onChange={this.handleChange}/>
            <input name='password' placeholder='password' type='password' style={Styles.input} value={this.state.password} onChange={this.handleChange}/>
            <button style={Styles.button} onClick={this.handleClick} >Sign in</button>
        </div>
    )}
}

export default HeaderAuth