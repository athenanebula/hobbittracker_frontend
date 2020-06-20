import React, {Component} from 'react'
import sign_in from '../img/closed.png'
import sign_in_open from '../img/opened_view.png'
import './HeaderAuth.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

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
        if (this.checkEmptyInput()) {
            let login = this.state.login;
            let password = this.state.password;
            const URLF = `https://hobbittrackback.herokuapp.com/authorization?login=${login}&password=${password}`;

            document.getElementById("spinnerLog").hidden = false;
            document.getElementById("headerLogin").disabled = true;
            document.getElementById("headerPassword").disabled = true;
            document.getElementById("buttonSignIn").disabled = true;
            document.getElementById("buttonRegister").disabled = true;
            fetch(URLF).then(res => {return res.json()})
            .then(res=> {
                const user_id = res;
                const URLF2 = `https://hobbittrackback.herokuapp.com/get_person_data?_id=${user_id}`;

                fetch(URLF2).then(res2 => {return res2.json()})
                .then(res2=> {
                    this.props.updateState(res2, user_id);
                    document.getElementById("spinnerLog").hidden = true;
                    document.getElementById("headerLogin").disabled = false;
                    document.getElementById("headerPassword").disabled = false;
                    document.getElementById("buttonSignIn").disabled = false;
                    document.getElementById("buttonRegister").disabled = false;
                })
            })
            .catch(function (error) {
                document.getElementById("headerPassword").value = '';
                this.setState({password: ''});
                alert("Login or password is wrong!");
                console.log('Request failed', error);
                document.getElementById("spinnerLog").hidden = true;
                document.getElementById("headerLogin").disabled = false;
                document.getElementById("headerPassword").disabled = false;
                document.getElementById("buttonSignIn").disabled = false;
                document.getElementById("buttonRegister").disabled = false;
            });
        }
        else {
            document.getElementById("headerPassword").value = '';
            this.setState({password: ''});
            alert("Login or password is wrong!");
        }
    }

    handleClickRegister(event){
        if (this.checkEmptyInput()) {
        let login = this.state.login
        let password = this.state.password
        const URLF = `https://hobbittrackback.herokuapp.com/add_person?login=${login}&password=${password}`;

        document.getElementById("spinnerLog").hidden = false;
        fetch(URLF).then(result => {return result.json()})
        .then(result=>{
            console.log(result)
            if (result === "True") {
                document.getElementById("headerPassword").value = '';
                this.setState({password: ''});
                alert("The user is registered. Please use the 'sign in' button to log in to your account.")
            }
            else {
                document.getElementById("headerPassword").value = '';
                this.setState({password: ''});
                alert("A user with this username and password already exists. Please use the 'sign in' button to log in to your account.")
            }
            document.getElementById("spinnerLog").hidden = true;
        })
        .catch(function (error) {
            console.log('Request failed', error);
            document.getElementById("spinnerLog").hidden = true;
            this.setState({password: '', login: ''});
        });
        }
        else {
            alert("Login or password is wrong!")
        }
    }

    checkEmptyInput() {
        if (this.state.login === '' || this.state.password === '') {
            return false;
        } 
        else {
            return true;
        }
    }
    render(){
        function ButtonMouseMove(){
            document.getElementById("buttonSignInImg").src = sign_in_open;
            document.getElementById("buttonRegister").hidden = false;
            document.getElementById("buttonSignInImg").height = 40;
        }
        function ButtonMouseOut(){
            document.getElementById("buttonSignInImg").src = sign_in;
            document.getElementById("buttonRegister").hidden = true;
            document.getElementById("buttonSignInImg").height = 38;
        }
        function ButtonRegMouseMove(){
            document.getElementById("buttonRegister").hidden = false;
        }
        function ButtonRegMouseOut(){
            document.getElementById("buttonRegister").hidden = true;
        }
        const Styles = {
            imgButton: {
                width: 42
            },

            div: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
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

            divLoader: {
                position: 'absolute',
                top: 15,
                right: 550
            }
        };
    return(
        <div>
            <div id="spinnerLog" style={Styles.divLoader} hidden> 
                <Loader type="Oval" className="loader" color="#000000" height={25} width={25} />
            </div>
            <p id="headerWelcome" className="greetings-header-text" hidden>Welcome to Middle-Earth, {this.state.login}</p>
            <div style={Styles.divInput} id="headerInputs">
                <div style={Styles.div}>
                    <input id="headerLogin" className="input" name='login' placeholder='login' onChange={this.handleChange}/>
                    <input id="headerPassword" className="input" name='password' placeholder='password' type='password' onChange={this.handleChange}/>
                </div>
            </div>
            <div style={Styles.divDropdown}>
                <button id="buttonSignIn" className="button-sign-in" onClick={this.handleClick} onMouseMove={ButtonMouseMove} onMouseOut={ButtonMouseOut}>
                    <div style={Styles.div}>
                        SIGN IN
                        <img id="buttonSignInImg" height='38' src={sign_in} alt='sign_in' style={Styles.imgButton} />
                    </div>
                </button>
                <button id="buttonRegister" className="button-reg" onClick={this.handleClickRegister} onMouseMove={ButtonRegMouseMove} onMouseOut={ButtonRegMouseOut} hidden>
                    <div style={Styles.div}>
                        REGISTER
                    </div>
                </button>
            </div>    
        </div>
    )}
}

export default HeaderAuth