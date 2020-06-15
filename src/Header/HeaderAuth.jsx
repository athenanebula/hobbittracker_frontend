import React, {Component} from 'react'
import sign_in from '../img/closed.png'
import sign_in_open from '../img/opened_view.png'
import { Dropdown, Button, DropdownButton } from 'react-bootstrap';

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

        fetch(URLF).then(res =>{return res.json()})
        .then(res=>{this.props.updateState(res)})
        .catch(function (error) {
            alert("Login or password is wrong!")
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
            dropdown: {
                backgroundColor: 'rgba(166, 127, 88, 0.7)',
                border: 0,
                width: 100,
                height: 35,
                color: '#FFF8DC',
                marginLeft: 5,
                marginRight: 5,
                outline: 0,
                outlineOffset: 0,
                fontSize: 18,
                display: 'flex'
            },

            imgButton: {
                width: 42,
                height: 38,
            },

            butReg: {
                fontSize: 22,
                marginTop: 5,
                marginLeft: 10
            },

            div: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'centr'
            },

            divDropdown: {
                position: 'absolute',
                top: 0,
                right: 0
            },

            divInput: {
                position: 'absolute',
                top: 0,
                right: 110
            }
        };
    return(
        <div>
            <div style={Styles.divInput}>
                <div style={Styles.div}>
                    <input id="headerLogin" name='login' placeholder='login' style={Styles.input} value={this.state.login} onChange={this.handleChange}/>
                    <input id="headerPassword" name='password' placeholder='password' type='password' style={Styles.input} value={this.state.password} onChange={this.handleChange}/>
                </div>
            </div>
            <div style={Styles.divDropdown}>
                <Dropdown>
                    <Dropdown.Toggle style={Styles.button}>
                        <div style={Styles.div}>
                            SIGN IN
                            <img src={sign_in} alt='sign_in' style={Styles.imgButton}/>
                        </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Button onClick={this.handleClick} style={Styles.dropdown}>
                            <div style={Styles.div}>
                                SIGN IN
                                <img src={sign_in_open} alt='sign_in_open' style={Styles.imgButton}/>
                            </div>
                        </Button>
                        <Button style={Styles.dropdown}>
                            <div style={Styles.div}>
                                <p style={Styles.butReg}>Register</p>
                            </div>
                        </Button>
                    </Dropdown.Menu>
                </Dropdown>
            </div>    
        </div>
    )}
}

export default HeaderAuth