import React, {  useEffect, useState } from 'react'

import Datamapping from './Datamapping'
import DateDetailsDispaly from './DateDetailsDisplay'
import DisplayB from './DisplayB'
import axios from 'axios'


const Home = () => {
  const [bollywood, setBollywood] = useState([]);
  const [filterbollywood, setFilterbollywood] = useState("");

  useEffect(() => {
    axios.get("http://localhost:9000/api/category/bollywood")
        .then((res)=>{console.log(res.data)
          setBollywood(res.data)})
  }, []);

  useEffect(() => {
    const filtered = bollywood.filter((element) => {
      return element.id === 9;
    });
    setFilterbollywood(filtered);
  }, [bollywood]);

  console.log(filterbollywood);
  const [food, setFood] = useState([]);
  const [filterfood, setFilterFood] = useState("");

  useEffect(() => {
    axios.get("http://localhost:9000/api/category/food")
        .then((res)=>{console.log(res.data)
          setFood(res.data)})
  }, []);

  useEffect(() => {
    const filtered = food.filter((element) => {
      return element.id === 15;
    });
    setFilterFood(filtered);
  }, [food]);

  console.log(filterfood);
  
  const [data2, setData2] = useState([]);
  const [filterData2, setFilterData2] = useState("");

  useEffect(() => {
    axios.get("http://localhost:9000/api/category/fitness")
        .then((res)=>{console.log(res.data)
          setData2(res.data)})
  }, []);

  useEffect(() => {
    const filtered = data2.filter((element) => {
      return element.id === 26;
    });
    setFilterData2(filtered);
  }, [data2]);

  console.log(filterData2);
  return (
    <>
      <div className="home">
        <div className="home_container">
          <div className='home-left'>
            <img src={"https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/29v7brgbosvhq2470fw1atiohqf8_1iugg0yk6nhcinmwa1otnfizt2zb_f04a5apypq630r0tlsih5xa8fizz_19f727_defd2a312df542b39decc069c3d667d4_mv2%20%281%29.jpg"} alt="not found" />
            <p>Title of the gallery</p>
          </div>
          <div className='home-right'>
            <div className='home-right-top'>
              <img src={"https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/p7a0v36n55ycpwiszk0y4u8k0xpm_66178230_2387537744905388_1314740131264987136_n.jpg"} alt="not found" />
            </div>
            <div className='home-right-buttom'>
              <img src={"https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/jzydq36w4f52ciuwv6wl2htosu5x_IMG_20220928_114116.jpg"} alt="not found" />
            </div>
          </div>
        </div>
      </div>
      <h1 style={{ margin: "40px" }}>The Latest</h1>
      <hr style={{ color: "red", width: "500px" }} />

      <div className="home__left">
        {filterData2 && filterData2.map((n, index) => (
          <Datamapping
            key={n.index}
            elementsid={n.id}
            imgUrl={n.img}
            title={n.title}
            description={n.description.slice(0, 100)}
          />
        ))
        }
      </div>
      <div className="home__left">
        {filterfood && filterfood
          .map((n, index) => (
            <Datamapping
              key={n.index}
              elementsid={n.id}
              imgUrl={n.img}
              title={n.title}
              description={n.description.slice(0, 100)}
            />
          ))
        }
      </div>
      <div className="home__left">
        {filterbollywood && filterbollywood.map((n, index) => (
          <Datamapping
            key={n.index}
            elementsid={n.id}
            imgUrl={n.img}
            title={n.title}
            description={n.description.slice(0, 100)}
          />
        ))
        }
      </div>
      <h1 style={{ marginTop: "40px" }}>
        Latest Articles
      </h1>
      <hr style={{ width: "200px", thickness: "20px" }} />
      <div classNmae="sidebar">
      <div className="rightbar2">
                   
                    {bollywood && bollywood
                        .map((n) => (
                            <DateDetailsDispaly
                                key={n.id}
                                elementsid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 100)}
/>
                        ))}
                </div>
                       
                <div className="sidebar2">
                <h1 style={{ marginTop: "40px", display: "inline-block" }}>
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
                <h1 style={{ marginTop: "40px", display: "inline-block" }}>
        Latest Stories
      </h1>
      <hr style={{ width: "200px", thickness: "20px" }} />
      <div className="home__left">
                    {filterData2 && filterData2
                        .map((n) => (
                            <Datamapping
                                key={n.id}
                                elementsid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                               
                            />
                        ))}
                </div>

                <div className="home__left">
                    {filterData2 && filterData2
                        .map((n) => (
                            <Datamapping
                                key={n.id}
                                elementsid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                              
                            />
                        ))}
                </div>

                <div className="home__left">
                    {filterData2 && filterData2
                        .map((n) => (
                            <Datamapping
                                key={n.id}
                                elementsid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                                          />
                        ))}
                </div>
          
        
    </>
  )
}

export default Home