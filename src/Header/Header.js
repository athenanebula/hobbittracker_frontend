import React, {Component} from 'react'
import HeaderAuth from './HeaderAuth'
import logo from '../img/logo.png'
import trace from '../img/trace.png'

class Header extends Component {

 render(){
    const Styles = {
        div: {
            height: 60,
            backgroundColor: '#807e70',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 8,
            marginTop: -5,
        },
        logotrace: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        logo: {
            height: 40,
            width: 40
        },
        trace: {
            height: 40,
            width: 140
        },
        h2: {
            margin: 0,
            alignItems: 'center'
        },

        components: {
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5
        }
    }
    return(
        <div style={Styles.div}  className="Header">
            <div style={Styles.logotrace}>
                <div style={Styles.components}><img src={logo} alt='logo' style={Styles.logo}/></div>
                <div style={Styles.components}><h2 style={Styles.h2}>Hobbit Track</h2></div>
                <div style={Styles.components}><img src={trace} alt='trace' style={Styles.trace}/></div>
            </div>
            <div ><HeaderAuth /></div>
        </div>
    )}
}

export default Header