
import DisplayB from './DisplayB'
import DateDetailsDisplay from './DateDetailsDisplay'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Bollywood = () => {
    const [bollywood,setBollywood]=useState("")
    useEffect(()=>{
        axios.get("http://localhost:9000/api/category/bollywood")
        .then((res)=>{console.log(res.data)
            setBollywood(res.data)})
    },[])
    
  return (
    <>
     <h1 style={{ marginLeft: "60px" }}>
        Bollywood
      </h1>
      <hr style={{ textalign:"left",width: "200px"}} />
      <div classNmae="sidebar">
      <div className="rightbar2">
                   
                    {bollywood && bollywood
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
                {bollywood && bollywood
                        
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

export default Bollywood