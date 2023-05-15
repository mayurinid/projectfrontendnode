import React from 'react'
import { NavLink } from 'react-router-dom';

const Datamapping = (props) => {
    const { imgUrl, title, description, elementsid } = props;
    return (
        <NavLink state={{ title: title, img: imgUrl, description: description, id: elementsid }} to={`article/${elementsid}`}>
           
                <div className="Datamapping" >
                    <div>
                        <img src={imgUrl} alt="not found" width="300px" height="200px"/>
                    </div>
                    <div>
                        <h3 >{title}</h3>
                        <p>{description}....</p>
                    </div>
                    <hr style={{ fontWeigth: "30px", color: "black" }} />
                </div>
                
            </NavLink>
    )

}

export default Datamapping;
