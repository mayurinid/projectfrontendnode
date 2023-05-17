import React, { useEffect, useState } from 'react'

import DateDetailsDisplay from './DateDetailsDisplay'
import DisplayB from './DisplayB'
import axios from 'axios'

const Food = () => {
    const [food,setFood]=useState("")
    useEffect(()=>{
        axios.get("https://projectbakendsprojectapi.onrender.com/api/category/food")
        .then((res)=>{console.log(res.data)
            setFood(res.data)})
    },[])
    
  return (
    <>
 
 <h1 style={{ marginLeft: "60px" }}>
 Food
      </h1>
      <hr style={{ textalign:"left",width: "200px"}} />
      <div classNmae="sidebar">
      <div className="rightbar2">
                   
                    {food &&food
                       
                        .map((n) => (
                            <DateDetailsDisplay
                                key={n.id}
                                elementsid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 100)}
/>
                        ))}
                </div>
                       
                <div className="sidebar2">
                <h1 style={{ marginTop: "2px", display: "inline-block" }}>
                    TOP News
                </h1>
                <div className="advertisement">
                        <p>Advertisement</p>
                    </div>
                {food &&food
                        .map((n) => (
                            <DisplayB
                                key={n.id}
                                elementsid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 100)}
                                
                            />
                        ))}
                </div>
                </div>  
    </>
  )
}

export default Food