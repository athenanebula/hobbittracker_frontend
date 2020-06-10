import React from 'react'

function Body(){

    const Styles = {
        div: {
            display: 'flex',
            justifyContent: 'flex-end'
        },

        p: {
            float: 'right',
            marginTop: '20%',
            marginRight: '10%',
            maxWidth: '38%',
            fontFamily: 'Monotype Corsiva',
            fontSize: 30,
            src: '../fonts/Mtcorsva.ttf',
            textAlign: 'center'
        }
    }

    return(
        <div className="Body" style={Styles.div}>
            <p style={Styles.p}>Приветствуем тебя, уважаемый странник!<br/>
            На пути этого приложения тебя, как истинного хоббита, ждут испытания по выработке привычек.</p>
        </div>
    )
}

export default Body