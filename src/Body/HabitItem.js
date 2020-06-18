import React, {Component} from 'react'
import './HabitItem.css'

class HabitItem extends Component {

    render(){
        const Styles = {
            span: {
                display: 'flex',
                alignItems: 'center'
            }
        }
        return(
            <div>
                <div id="habitItem">
                    <span style={Styles.span}>
                        <input className="custom-checkbox" type="checkbox" id={this.props.index} name="habit"/> 
                        <label htmlFor={this.props.index}/>
                        <p className="label">{this.props.habit}</p>
                    </span>
                </div>
            </div>
        )
    }
}

export default HabitItem