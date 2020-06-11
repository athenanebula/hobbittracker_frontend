import React from 'react'
import HeaderAuth from './HeaderAuth'

function Header(){

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
        logo: {
            height: 40,
            width: 40
        },
        trace: {
            height: 40,
            width: 140
        },
        h2: {
            margin: 0
        }
    }

    return(
        <div style={Styles.div}  className="Header">
            <div>
                <img src='url(../img/logo.png)' style={Styles.logo}/>
            </div>
            <div>
                <h2 style={Styles.h2}>Hobbit Track</h2>
            </div>
            <div>
                <img src='url(../img/trace.png)' style={Styles.trace}/>
            </div>
            <div ><HeaderAuth /></div>
        </div>
    )
}

export default Header