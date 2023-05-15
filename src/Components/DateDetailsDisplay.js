import React from "react";
import { NavLink } from "react-router-dom";

const DateDetailsDisplay = (props) => {
    const { imgUrl, title, description, elementsid } = props;
    return (
               <NavLink state={{title: title,img: imgUrl,description: description,id: elementsid,}}to={`${elementsid}`}>
            <div >
                <div className="DataBolly">
                
                    <div >
                        <img src={imgUrl} alt="{not found}" width="300px" height="200px" />
                    </div>
                    <div>
                    <h5>{title}</h5>
                        <p>{description}....</p>
                    </div>
                </div>
                <hr style={{ fontWeigth: "40px", color: "black" }} />
            </div>
        </NavLink>
       
    );
};

export default DateDetailsDisplay;