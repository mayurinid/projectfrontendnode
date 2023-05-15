import React from 'react'
import { Link } from 'react-router-dom'

const DisplayB = (props) => {
    const { imgUrl, title, description, elementsid } = props;
    return (
        <Link state={{ title: title, img: imgUrl, description: description, id: elementsid }} to={`${elementsid}`}>
            <div className='smallbolly' >
                <div className='smalldata'>
                    <div>
                        <img src={imgUrl} alt="not found" width="20px" height="30px" />
                    </div>
                    <div>
                        <h6>{title} .....</h6>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default DisplayB;
