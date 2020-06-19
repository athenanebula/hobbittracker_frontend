import React, {Component} from 'react'
import HabitItem from './HabitItem';
import AddHabit from './AddHabit';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import "./HabitsList.css"

class HabitsList extends Component {

    render(){

        const Styles = {
            divList: {
                color: '#e3f6f4'
            },

            p: {
                marginRight: '2vw',
                marginLeft: '2vw',
                fontSize: '2vw',
                textAlign: 'center'
            },

            div: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }
        
        return(
            <div style={Styles.divList}>
                <div style={Styles.div}>
                    <p style={Styles.p}>Habits List</p>
                    <div id="spinnerHabits" hidden> 
                        <Loader type="Oval" className="loader" color="#ffffff" height={25} width={25} />
                    </div>
                </div>
                <div id="ifListHabitsEmpty" hidden>
                    <p style={Styles.p}>Пока ты ещё не начал путь по нашему Средиземью.<br/>Прежде, чем начать приключение создай новую привычку.</p>
                </div>
                <div id="listHabits" className="list">
                    {this.props.listHabits.map(habit => {
                        return <HabitItem habit={habit.name} key={habit._id.$oid} index={habit._id.$oid} user_id={this.props.user_id} updateState = {this.props.updateState}/>
                    })}
                </div>
                <div id="addHabitBox">
                    <AddHabit user_id={this.props.user_id} updateState = {this.props.updateState}/>
                </div>
            </div>
        )
    }
}

export default HabitsList