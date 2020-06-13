import React, {Component} from 'react'
import sign_in from '../img/closed.png'
import { Dropdown, Button } from 'react-bootstrap';

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
                border: 0,
                width: 100,
                height: 37,
                color: '#FFF8DC',
                marginTop: 10,
                marginLeft: 5,
                marginRight: 5,
                outline: 0,
                outlineOffset: 0,
                fontSize: 18
            },
    
            input: {
                backgroundColor: '#adab98',
                borderRadius: 8,
                border: 5,
                height: 35,
                marginTop: 10,
                marginLeft: 5,
                marginRight: 5,
                outline: 0,
                outlineOffset: 0,
                fontSize: 22
            },

            imgButton: {
                width: 37,
                height: 37,
                margin: 0
            },

            div: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'centr'
            }
        };
    return(
        <div style={Styles.div}>
            <input name='login' placeholder='login' style={Styles.input} value={this.state.login} onChange={this.handleChange}/>
            <input name='password' placeholder='password' type='password' style={Styles.input} value={this.state.password} onChange={this.handleChange}/>
            <button style={Styles.button} onClick={this.handleClick} >
                <div style={Styles.div}>
                    SIGN IN
                    <img src={sign_in} alt='sign_in' style={Styles.imgButton}/>
                </div>
            </button>
            <Dropdown>
                <Button>Sign In</Button>

                <Dropdown.Toggle/>
                <Dropdown.Menu>
                    <Dropdown.Item>Register</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )}
}

export default HeaderAuth