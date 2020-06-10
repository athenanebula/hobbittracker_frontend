import React from 'react'

function HeaderAuth(){

    const Styles = {
        button: {
            borderRadius: 8,
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5
        },

        input: {
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5
        }
    }

    return(
        <form>
            <input placeholder='login' style={Styles.input} />
            <input placeholder='password' style={Styles.input} />
            <button type='submit' style={Styles.button}>Sign in</button>
        </form>
    )
}

export default HeaderAuth