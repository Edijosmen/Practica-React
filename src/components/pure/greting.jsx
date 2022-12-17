import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Greting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edad:29
        }
    }
    render() {
        return (
            <div>
                <h1>Holas!!{this.props.name}</h1>
                <h2>tu edad es :{this.state.edad}</h2>

                <div>
                    <button onClick={this.birthday}>Cambiar años</button>
                </div>
            </div>
        )
    }
    birthday = ()=>{
        this.setState((prevState)=>({
            edad:prevState.edad +1
        }))
    }
}

Greting.propTypes = {
    name: PropTypes.string,
}

export default Greting;
