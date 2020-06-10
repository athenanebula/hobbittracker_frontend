import React from 'react'
import HeaderAuth from './HeaderAuth'

function Header(){

    const Styles = {
        div: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    }

    return(
        <div style={Styles.div}>
            <div ><h2>Hobbit Track</h2></div>
            <div ><HeaderAuth /></div>
        </div>
    )
}

export default Header