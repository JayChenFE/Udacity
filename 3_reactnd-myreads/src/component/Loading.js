import React from 'react'
import ReactLoading from 'react-loading'

const Loading = ({ type, color }) => (
    <ReactLoading type={type} color={color} style={{ height: 800, width: 200, margin: '0 auto' }} />
)

export default Loading 
