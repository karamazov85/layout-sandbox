import React from "react"
import Button from "../button/Button"
import "./switcher.css"

const Switcher = () => (
    <>
    <h1>THE SWITCHER</h1>
    <div className="switcher">
        <div className="">
            <div className="card stack">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, assumenda.</p>
                <Button children="Button" outline />
            </div>
            <div className="card stack">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, assumenda.</p>
                <Button children="Button" outline />
            </div>
            <div className="card stack">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, assumenda.</p>
                <Button children="Button" outline />
            </div>
            {/* <div className="card">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, assumenda.</p>
                <Button children="Button" outline fullsize/>
            </div>
            <div className="card">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, assumenda.</p>
                <Button children="Button" outline fullsize/>
            </div>
            <div className="card">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, assumenda.</p>
                <Button children="Button" outline fullsize/>
            </div> */}
        </div>
    </div>
    </>
)

export default Switcher;