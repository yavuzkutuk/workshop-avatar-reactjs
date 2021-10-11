/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Avatar = ({image, firstName, lastName}) =>{
    return(
        <div className="avatar">
            <img src={image} />
            <h2>{firstName} {lastName}</h2>
        </div>
    )
    

}
export default Avatar;