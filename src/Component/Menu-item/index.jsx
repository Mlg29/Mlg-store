import React from "react"
import "./Menu-item.scss"


function MenuItem({title, imageUrl, size,linkUrl}) {
    return (
        <div className={`${size} menu-item`}>

        <div  
            className="background-image"
            style={{
            backgroundImage: `url(${imageUrl})`
             }} />
             
            <div className="content">
            <a className="link" href={`${linkUrl}`}>
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </a>
            </div>
            
        </div>
          
    )
}

export default MenuItem
