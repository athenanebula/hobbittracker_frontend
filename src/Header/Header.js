import React, {Component} from 'react'
import HeaderAuth from './HeaderAuth'
import {Navbar, Container} from 'react-bootstrap'
import logo from '../img/logo.png'
import trace from '../img/trace.png'

class Header extends Component {

 render(){
    const Styles = {
        nav: {
            height: 55,
            backgroundColor: '#807e70',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 10,
            marginTop: -10,
        },
        container: {
            display: 'flex',
            alignItems: 'center'
        },
        logo: {
            height: 40,
            width: 40,
            marginTop: 10,
            marginLeft: 5,
            marginRight: 5
        },
        h2: {
            marginTop: 10,
            marginLeft: 5,
            marginRight: 10,
            marginBottom: 0,
            fontSize: 34, 
            fontWeight: 'bold' 
        },
        trace: {
            height: 40,
            width: 170,
            marginTop: 10,
            marginLeft: 10
        },
        aut: {
            position: 'absolute',
            right: 0
        }
    }
    return(
        <Navbar style={Styles.nav} expand="lg">
            <Container style={Styles.container}>
                <Navbar.Brand href='/'>
                    <img src={logo} alt='logo' className='d-inline-block align-top' style={Styles.logo}/>    
                </Navbar.Brand>
                <p style={Styles.h2}>Hobbit Track</p>
                <img src={trace} alt='trace' style={Styles.trace}/>
                <div style={Styles.aut}><HeaderAuth updateState = {this.props.updateState}/></div>
            </Container>
        </Navbar>
    )}
}

export default Header