import React from 'react'
import "./button.css"

const Button = ({ children, outline }) => {
    return (
        <>
           <button className={outline ? "outline" : "full" }>
               {children}
           </button> 
        </>
    )
}

export default Button;