import React, {Component} from 'react'

class HabitItem extends Component {

    render(){
        return(
            <div>
                <div id="habitItem">
                    <input type="checkbox" /> {this.props.habit}
                </div>
            </div>
        )
    }
}

export default HabitItem