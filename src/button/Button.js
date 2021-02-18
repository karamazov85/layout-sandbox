import React from 'react'
import "./button.css"

const Button = ({ children, outline, fullsize }) => {
    return (
        <>
           <button className={`${outline ? "outline" : "full"} ${fullsize ? "full-size" : ""}`}>
               {children}
           </button> 
        </>
    )
}

export default Button;