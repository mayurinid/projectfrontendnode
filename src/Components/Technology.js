
import DisplayB from './DisplayB';
import DateDetailsDisplay from './DateDetailsDisplay';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Technology = () => {
    const [technology,setTechnology]=useState("")
    useEffect(()=>{
        axios.get("https://projectbakendsprojectapi.onrender.com/api/category/technology")
        .then((res)=>{console.log(res.data)
            setTechnology(res.data)}) 
    },[])
  
  return (
    <>

<h1 style={{ marginLeft: "60px" }}>
       Technology
      </h1>
      <hr style={{ textalign:"left",width: "200px"}} />
      <div classNmae="sidebar">
      <div className="rightbar2">
                   
                    {technology && technology
                        
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
                {technology && technology
                        .filter((element) => {
                            return element.category === "Technology";
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

export default Technology