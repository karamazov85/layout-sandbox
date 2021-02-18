import React from 'react'
import Button from '../button/Button';
import "./cluster.css"

const Cluster = () => {
    return (
        <>
        <h1>THE CLUSTER</h1>
        <div className="cluster">
            <div>
                <Button children="Button"/>
                <ul>
                    <li><a href="#">Navlink</a></li>
                    <li><a href="#">Navlink2</a></li>
                    <li><a href="#">Navlink Too</a></li>
                    <li><a href="#">Link</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Cluster;


