import React from 'react'
import Button from "../button/Button";
import "./stack.css"

const Stack = () => {
    return (
        <>
        <h1>THE STACK</h1>
        <div className="form__container--outer stack">
            <div className="form-group stack-small">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="type your name here..."/>
            </div>
            <div className="form-group stack-small">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="type your address here..."/>
            </div>
            <Button children="Submit" outline={false}/>
        </div>
        <h1>THE STACK WITH TEXT</h1>
        <div className="text__container--outer stack">
            <h2>The Wasteland</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum id nisi minima cupiditate fugit veniam delectus modi suscipit sed enim. Exercitationem maiores quas voluptates doloremque?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum id nisi minima cupiditate fugit veniam delectus modi suscipit sed enim. Exercitationem maiores quas voluptates doloremque?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum id nisi minima cupiditate fugit veniam delectus modi suscipit sed enim. Exercitationem maiores quas voluptates doloremque?</p>
        </div>
        </>
    )
}

export default Stack;
