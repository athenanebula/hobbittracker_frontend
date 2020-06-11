import React from 'react'

function HeaderAuth(){

    const Styles = {
        button: {
            backgroundColor: '#a67f58',
            borderRadius: 8,
            border: 4,
            width: 100,
            height: 35,
            color: '#FFF8DC',
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
            outline: 0,
            outlineOffset: 0,
            fontSize: 22
        },

        input: {
            backgroundColor: '#adab98',
            borderRadius: 8,
            border: 4,
            height: 35,
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
            outline: 0,
            outlineOffset: 0,
            fontSize: 22
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