import React, {Component} from 'react'

class Body extends Component{
    
render(){
    const Styles = {
        div: {
            display: 'flex',
            justifyContent: 'flex-end'
        },

        p: {
            float: 'right',
            marginTop: '20vw',
            marginRight: '10vw',
            maxWidth: '40vw',
            fontSize: '1.7vw',
            textAlign: 'center',
            textShadow: ' 0 0 0.5px #a28d60',
            color: '#43311e'
        }
    }
    return(
        <div id="startBody" className="Body" style={Styles.div}>
            <div>{this.props.listHabits}</div>
            <p id="startText" style={Styles.p}>Приветствуем тебя, уважаемый странник!<br/>
            На пути этого приложения тебя, как истинного хоббита, ждут испытания по выработке привычек.</p>
        </div>
    )}
}

export default Body