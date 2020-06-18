import React, {Component} from 'react'
import './HabitItem.css'

class HabitItem extends Component {

    render(){
        return(
            <div>
                <div id="habitItem">
                    <span>
                        <input className="custom-checkbox" type="checkbox" id={this.props.index} name="habit"/> 
                        <label htmlFor={this.props.index}>
                            {this.props.habit}
                        </label>
                    </span>
                </div>
            </div>
        )
    }
}

export default HabitItem