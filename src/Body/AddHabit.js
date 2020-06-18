import React, {Component} from 'react'


class AddHabit extends Component {

    render(){        
        return(
            <div id="addHabit">
                <input id="addNewHabit" name="newHabit" placeholder="Add New Habit"></input>
            </div>
        )
    }
}

export default AddHabit