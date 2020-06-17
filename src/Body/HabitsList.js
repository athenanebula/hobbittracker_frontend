import React, {Component} from 'react'

class HabitsList extends Component {


    render(){
        function ButtonMouseMove(){
            document.getElementById("addNewHabitsButton").style.backgroundColor = '#85603d';
        }
        function ButtonMouseOut(){
            document.getElementById("addNewHabitsButton").style.backgroundColor = '#a67f58';
        }

        const Styles = {
            div: {
                fontSize: '1.7vw',
                color: '#e3f6f4',
                textAlign: 'center'
            },
            p: {
                marginRight: '2vw',
                marginLeft: '2vw'
            },
    
            button: {
                backgroundColor: '#a67f58',
                borderRadius: 8,
                border: 0,
                width: 100,
                height: 37,
                color: '#e3f6f4',
                marginTop: 10,
                marginLeft: 5,
                marginRight: 5,
                outline: 0,
                outlineOffset: 0,
                fontSize: 18
            },

            list: {
                display: 'flex'
            },

            checkBox: {
                display: 'none',
            }
        }
        
        return(
            <div style={Styles.div}>
                <p style={Styles.p}>Habits List</p>
                <div id="ifListHabitsEmpty" hidden>
                    <p style={Styles.p}>Пока ты ещё не начал путь по нашему Средиземью.<br/>Прежде, чем начать приключение создай новую привычку.</p>
                    <button id="addNewHabitsButton" style={Styles.button} onMouseMove={ButtonMouseMove} onMouseOut={ButtonMouseOut}>Add new habit</button>
                </div>
                <div id="listHabits" style={Styles.list}>
                        <input type="checkbox" /> {this.props.listHabits.map((habit) => habit.name)}
                </div>
            </div>
        )
    }
}

export default HabitsList