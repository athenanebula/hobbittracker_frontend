import React, {Component} from 'react'
import HabitItem from './HabitItem';
import AddHabit from './AddHabit';

class HabitsList extends Component {

    render(){

        const Styles = {
            div: {
                fontSize: '1.7vw',
                color: '#e3f6f4',
                textAlign: 'center'
            },
            p: {
                marginRight: '2vw',
                marginLeft: '2vw'
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
                        return <HabitItem habit={habit.name} key={habit._id.$oid} index={habit._id.$oid}/>
                    })}
                </div>
                <div id="addHabitBox">
                    <AddHabit/>
                </div>
            </div>
        )
    }
}

export default HabitsList