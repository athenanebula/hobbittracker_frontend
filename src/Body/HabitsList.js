import React, {Component} from 'react'
import HabitItem from './HabitItem';
import AddHabit from './AddHabit';

class HabitsList extends Component {

    render(){

        const Styles = {
            div: {
                color: '#e3f6f4'
            },
            p: {
                marginRight: '2vw',
                marginLeft: '2vw',
                fontSize: '2vw',
                textAlign: 'center'
            }
        }
        
        return(
            <div style={Styles.div}>
                <p style={Styles.p}>Habits List</p>
                <div id="ifListHabitsEmpty" hidden>
                    <p style={Styles.p}>Пока ты ещё не начал путь по нашему Средиземью.<br/>Прежде, чем начать приключение создай новую привычку.</p>
                </div>
                <div id="listHabits">
                    {this.props.listHabits.map(habit => {
                        return <HabitItem habit={habit.name} key={habit._id.$oid} index={habit._id.$oid} user_id={this.props.user_id} updateState = {this.props.updateState}/>
                    })}
                </div>
                <div id="addHabitBox" style={Styles.div}>
                    <AddHabit user_id={this.props.user_id} updateState = {this.props.updateState}/>
                </div>
            </div>
        )
    }
}

export default HabitsList