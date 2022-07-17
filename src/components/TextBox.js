import React from 'react'
import _ from 'lodash'

const TextBox = (props) => {

    const { data } = props;
    return (
        <h1>{data? data : ''}</h1>
    )
}

export default TextBox;