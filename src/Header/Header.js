import React from 'react'
import HeaderAuth from './HeaderAuth'

function Header(){

    const Styles = {
        div: {
            height: 55,
            backgroundColor: '#807e70',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        h2: {
            margin: 0
        }
    }

    return(
        <div style={Styles.div}  className="Header">
            <div>
                <h2 style={Styles.h2}>Hobbit Track</h2>
            </div>
            <div ><HeaderAuth /></div>
        </div>
    )
}

export default Header