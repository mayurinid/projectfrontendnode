import React, { useEffect, useState } from 'react'
import DisplayB from './DisplayB';
import DateDetailsDisplay from './DateDetailsDisplay';
import axios from 'axios';

const Hollywood = () => {
    const [hollywood,setHollywood]=useState("")
    useEffect(()=>{
        axios.get("https://projectbakendsprojectapi.onrender.com/api/category/hollywood")
        .then((res)=>{console.log(res.data)
            setHollywood(res.data)})
    },[])
   
  return (
    <>
  <h1 style={{ marginLeft: "60px" }}>
        Hollywood
      </h1>
      <hr style={{ textalign:"left",width: "200px"}} />
      <div classNmae="sidebar">
      <div className="rightbar2">
                   
                    {hollywood && hollywood
                        
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
                {hollywood && hollywood
                        .filter((element) => {
                            return element.category === "Hollywood";
                        })
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

export default Hollywood