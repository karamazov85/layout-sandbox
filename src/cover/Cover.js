import React from 'react'
import Button from "../button/Button"
import "./cover.css"

const Cover = () => (
    <>
    <h1>THE COVER</h1>
    <div className="cover">
      <div className="">
          <p>Some other content, sizing is intrinsic</p>
      </div>
      <div className="centered stack">
        <h1 className="centered-text">This is the centered content</h1>
        <p className="centered-text">It is always centered in the available space not taken up by the other elements in the component. Sizing is strickly intrinsic.</p>
        <Button children="Get Started"/>
      </div>
      <div className="">
          <p>Some other content, sizing is intrinsic</p>
      </div>  
      <div className="">
          <p>Some other content, sizing is intrinsic</p>
      </div>  
      <div className="">
          <p>Some other content, sizing is intrinsic</p>
      </div>  
    </div>
    </>
)

export default Cover;
