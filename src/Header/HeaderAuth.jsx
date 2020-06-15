import React, {Component} from 'react'
import sign_in from '../img/closed.png'
import sign_in_open from '../img/opened_view.png'

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
        function ButtonMouseMove(){
            document.getElementById("buttonSignInImg").src = sign_in_open;
            document.getElementById("buttonRegister").hidden = false;
        }
        function ButtonMouseOut(){
            document.getElementById("buttonSignInImg").src = sign_in;
            document.getElementById("buttonRegister").hidden = true;
        }
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
                fontSize: 18
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
                <button id="buttonSignIn" onClick={this.handleClick} style={Styles.dropdown} onMouseMove={ButtonMouseMove} onMouseOut={ButtonMouseOut}>
                    <div style={Styles.div}>
                        SIGN IN
                        <img id="buttonSignInImg" src={sign_in} alt='sign_in' style={Styles.imgButton} />
                    </div>
                </button>
                <button id="buttonRegister" style={Styles.dropdown} onMouseMove={ButtonMouseMove} onMouseOut={ButtonMouseOut} hidden>
                    <div style={Styles.div}>
                        REGISTER
                    </div>
                </button>
            </div>    
        </div>
    )}
}

export default HeaderAuth