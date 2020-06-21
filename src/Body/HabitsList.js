import React, {Component} from 'react'
import HabitItem from './HabitItem';
import AddHabit from './AddHabit';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import "./HabitsList.css"
import leftFoot from '../img/footLeft.svg'
import rightFoot from '../img/footRight.svg'

class HabitsList extends Component {
    constructor(props){
        super(props);

        this.countPreviousDaysInRow = this.countPreviousDaysInRow.bind(this);
        this.drawFeet = this.drawFeet.bind(this);
    }

    
    drawFeet(check) {
        let tmp = this.countPreviousDaysInRow(check);
        let feet = []
        for (let i = 0; i < tmp; i++) {
            if (i % 2 === 0) {
                feet.push(leftFoot);
            }
            else {
                feet.push(rightFoot);
            }
        }
        return feet;
    }

    countPreviousDaysInRow(check){
        let tmp = 0;
        let currentDate = new Date(2020, 5, 22);
        let prevDate = new Date(currentDate.getUTCFullYear(), currentDate.getMonth(), currentDate.getDate()-1);
        for (let i = check.length-1; i >= 0; i--) {
            let date = new Date(check[i].$date);
            if (date.toDateString() === currentDate.toDateString()) {
                continue;
            }
            if (date.toDateString() === prevDate.toDateString()) {
                tmp++;
                prevDate = new Date(prevDate.getUTCFullYear(), prevDate.getMonth(), prevDate.getDate()-1);
            } else {
                break;
            }
        }
        return tmp;
    }

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
                        let feet = this.drawFeet(habit.check);
                        return <HabitItem habit={habit.name} key={habit._id.$oid} index={habit._id.$oid} feet={feet} user_id={this.props.user_id} start={habit.start.$date} end={habit.end.$date} updateState = {this.props.updateState}/>
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