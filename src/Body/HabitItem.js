import React, {Component} from 'react'
import './HabitItem.css'

class HabitItem extends Component {

    render(){
        return(
            <div>
                <div id="habitItem">
                    <input class="custom-checkbox" type="checkbox" id="habit" name="habit"/> 
                    <label for="habit">
                        {this.props.habit}
                    </label>
                </div>
            </div>
        )
    }
}

export default HabitItem