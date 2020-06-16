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
        this.handleClickRegister = this.handleClickRegister.bind(this);
    }

    handleChange(event) {
        if (event.currentTarget.name === 'login') {this.setState({login: event.target.value});}
        else {this.setState({password: event.target.value});};
      }

    handleClick(event){
        let login = this.state.login
        let password = this.state.password
        const URLF = `https://hobbittrackback.herokuapp.com/authorization?login=${login}&password=${password}`;

        fetch(URLF).then(res => {return res.json()})
        .then(res=> {
            this.props.updateState(res)
            const URLF2 = `https://hobbittrackback.herokuapp.com/get_person_data?_id=${res}`
            /*fetch(URLF2).then(res2 => {return res2.json()})
            .then(res2=> {
                this.props.updateState(res2)
            })*/
        })
        .catch(function (error) {
            alert("Login or password is wrong!")
            console.log('Request failed', error)
        });
    }

    handleClickRegister(event){
        let login = this.state.login
        let password = this.state.password
        const URLF = `https://hobbittrackback.herokuapp.com/add_person?login=${login}&password=${password}`;

        fetch(URLF).then(result => {return result.json()})
        .then(result=>{
            console.log(result)
            if (result === "True") {
                alert("The user is registered. Please use the 'sign in' button to log in to your account.")
            }
            else {
                alert("A user with this username and password already exists. Please use the 'sign in' button to log in to your account.")
            }
        })
        .catch(function (error) {
            console.log('Request failed', error)
        });
    }
    render(){
        function ButtonMouseMove(){
            document.getElementById("buttonSignInImg").src = sign_in_open;
            document.getElementById("buttonRegister").hidden = false;
            document.getElementById("buttonSignInImg").height = 40;
            document.getElementById("buttonSignIn").style.backgroundColor = '#85603d';
        }
        function ButtonMouseOut(){
            document.getElementById("buttonSignInImg").src = sign_in;
            document.getElementById("buttonRegister").hidden = true;
            document.getElementById("buttonSignInImg").height = 38;
            document.getElementById("buttonSignIn").style.backgroundColor = '#a67f58';
        }
        function ButtonRegMouseMove(){
            document.getElementById("buttonRegister").hidden = false;
            document.getElementById("buttonRegister").style.backgroundColor = '#85603d';
        }
        function ButtonRegMouseOut(){
            document.getElementById("buttonRegister").hidden = true;
            document.getElementById("buttonRegister").style.backgroundColor = '#a67f58';
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

            buttonReg: {
                backgroundColor: '#a67f58',
                border: 0,
                borderRadius: 8,
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
                width: 42
            },

            butReg: {
                fontSize: 22,
                marginTop: 10,
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
            },

            h2: {
                marginTop: 10,
                marginLeft: 5,
                marginRight: 10,
                marginBottom: 0,
                fontSize: 34, 
                fontWeight: 'bold' 
            }
        };
    return(
        <div>
            <p id="headerWelcome" style={Styles.h2} hidden>Welcome to Middle-Earth, {this.state.login}</p>
            <div style={Styles.divInput} id="headerInputs">
                <div style={Styles.div}>
                    <input id="headerLogin" name='login' placeholder='login' style={Styles.input} value={this.state.login} onChange={this.handleChange}/>
                    <input id="headerPassword" name='password' placeholder='password' type='password' style={Styles.input} value={this.state.password} onChange={this.handleChange}/>
                </div>
            </div>
            <div style={Styles.divDropdown}>
                <button id="buttonSignIn" onClick={this.handleClick} style={Styles.button} onMouseMove={ButtonMouseMove} onMouseOut={ButtonMouseOut}>
                    <div style={Styles.div}>
                        SIGN IN
                        <img id="buttonSignInImg" height='38' src={sign_in} alt='sign_in' style={Styles.imgButton} />
                    </div>
                </button>
                <button id="buttonRegister" onClick={this.handleClickRegister} style={Styles.buttonReg} onMouseMove={ButtonRegMouseMove} onMouseOut={ButtonRegMouseOut} hidden>
                    <div style={Styles.div}>
                        REGISTER
                    </div>
                </button>
            </div>    
        </div>
    )}
}

export default HeaderAuth