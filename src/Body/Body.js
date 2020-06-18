import React, {Component} from 'react'
import HabitsList from './HabitsList'
import "./Body.css"

class Body extends Component{
    
render(){
    const Styles = {
        div: {
            display: 'flex',
            justifyContent: 'flex-end'
        }
    }
    return(
        <div id="startBody" className="Body" style={Styles.div}>
            <div id="listHabitsBox" className="box" hidden>
                <HabitsList user_id = {this.props.user_id} listHabits = {this.props.listHabits} updateState = {this.props.updateState}/>
            </div>
            <p id="startText" className="startText" style={Styles.p}>Приветствуем тебя, уважаемый странник!<br/>
            На пути этого приложения тебя, как истинного хоббита, ждут испытания по выработке привычек.</p>
        </div>
    )}
}

export default Body