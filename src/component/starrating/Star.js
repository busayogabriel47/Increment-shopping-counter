import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';


const Star = ({ selected = false, onSelect}) => {
    return ( 
        <FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>
     );
}
 
export default Star;