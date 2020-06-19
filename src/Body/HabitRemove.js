import React, {Component} from 'react'

class HabitRemove extends Component {

    constructor(props) {
        super(props);
        this.hundleClick = this.hundleClick.bind(this);
    }
    hundleClick() {
        let habit_id = this.props.habit_id;
        const URLF = `https://hobbittrackback.herokuapp.com/delete_habit?_id=${habit_id}`;

        document.getElementById("spinner").hidden = false;
        fetch(URLF).then(res => {return res.json()})
            .then(res=> {
                let user_id = this.props.user_id;
                const URLF2 = `https://hobbittrackback.herokuapp.com/get_person_data?_id=${user_id}`

                fetch(URLF2).then(res2 => {return res2.json()})
                .then(res2=> {
                    this.props.updateState(res2, user_id)
                    document.getElementById("spinner").hidden = true;
                })
                .catch(function (error) {
                    alert("Something is wrong!")
                    console.log('Request failed', error);
                    document.getElementById("spinner").hidden = true;
                });
            })
            .catch(function (error) {
                alert("Something is wrong!")
                console.log('Request failed', error);
                document.getElementById("spinner").hidden = true;
            });
    }

    render(){
        return(
            <div>
                <button onClick={this.hundleClick}>Remove</button>
            </div>
        )
    }
}

export default HabitRemove