import React from 'react'
import { Link } from 'react-router-dom'
import Newpage from './newpage'

const BackBotton1 = () => {
    const mystyle = {
        color: "pink",
        backgroundColor: "blue",
        borderRadius: "8px"
    }
  return (
    <div className='btn2'>
        <Newpage/><br/>
        <Link to="/"> <button style={mystyle} >Go Home</button> </Link>
        </div>
  )
}

export default BackBotton1