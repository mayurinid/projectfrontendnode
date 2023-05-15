import React from 'react'
import { useLocation } from 'react-router-dom';

const Newpage = () =>{
    const location1 =useLocation();
    const { title, img, description } = location1.state;
    console.log(title)
  return (
    <div className='New_page'> 
    <h1>{title}</h1>
    <img src={img} alt="" />
    <p>{description}</p>
</div>

  )
}

export default Newpage