import React, { useState,useEffect } from 'react'
import DateDetailsDisplay from './DateDetailsDisplay';
import DisplayB from './DisplayB';
import axios from 'axios';

const Fitness = () => {
    const [fitness,setFitness]=useState("")
    useEffect(()=>{
        axios.get("https://projectbakendsprojectapi.onrender.com/api/category/fitness")
        .then((res)=>{console.log(res.data)
            setFitness(res.data)})
    },[])
   
  return (
    <>
    <h1 style={{ marginLeft: "60px" }}>
    Fitnees
      </h1>
      <hr style={{ textalign:"left",width: "200px"}} />
      <div classNmae="sidebar">
      <div className="rightbar2">
                   
                    {fitness && fitness
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
                {fitness && fitness
                       
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

export default Fitness