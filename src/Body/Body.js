import React, {Component} from 'react'
import HabitsList from './HabitsList'

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
        },

        box: {
            backgroundColor: 'rgba(37, 62, 3, 0.6)',
            width: '60vw',
            height: '40vw',
            borderRadius: 60,
            marginTop: '5vw',
            marginRight: '5vw',
            overflow: 'auto'
        }
    }
    return(
        <div id="startBody" className="Body" style={Styles.div}>
            <div id="listHabitsBox" hidden style={Styles.box}>
                <HabitsList listHabits = {this.props.listHabits} />
            </div>
            <p id="startText" style={Styles.p}>Приветствуем тебя, уважаемый странник!<br/>
            На пути этого приложения тебя, как истинного хоббита, ждут испытания по выработке привычек.</p>
        </div>
    )}
}

export default Body