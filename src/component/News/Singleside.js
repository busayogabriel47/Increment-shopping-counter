import React, { Component } from 'react';


const Singleside = ({item}) => {
    return ( 
        <>
            <div className="divider"></div>
            <a href={item.url} target="_blank">
                <div className="section">
                    <h5>{item.source.name}</h5>
                    <p>{item.title}</p>
                </div>
            </a>
        </>
     );
}
 
export default Singleside;