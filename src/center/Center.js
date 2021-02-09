import React from 'react'
import Button from '../button/Button'
import "./center.css"

const Center = () => {
    return (
        <>
        <h1>THE CENTER</h1>
        <div className="center stack misc-styles">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit dignissimos necessitatibus in dolorum eligendi? Blanditiis facere eos obcaecati porro facilis?</p>
            
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit dignissimos necessitatibus in dolorum eligendi? Blanditiis facere eos obcaecati porro facilis?</p>
            
            <Button children="Centered"/>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit dignissimos necessitatibus in dolorum eligendi? Blanditiis facere eos obcaecati porro facilis?</p>
        </div>
        </>
    )
}

export default Center;
