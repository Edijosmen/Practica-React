import React, { useState } from 'react'
import PropTypes from 'prop-types'

function GretingF(props) {
    const [age,setState] = useState(29);
    const birthday = ()=>{
        setState(age +1);
    }
  return (
    <div>
        <h1>Holas!!{props.name}</h1>
        <h2>tu edad es :{age}</h2>

        <div>
            <button onClick={birthday}>Cambiar años</button>
        </div>
    </div>
  )
}

GretingF.propTypes = {
    name: PropTypes.string,
}

export default GretingF;

