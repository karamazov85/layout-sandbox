import React from 'react'
import Button from "../button/Button";
import "./sidebar.css";

const Sidebar = () => {
    return (
        <>
         <h1>THE SIDEBAR</h1>
         <div className="with-sidebar">
            <div className="sidebar stack sidebar__container">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusamus similique eligendi voluptatem, quam non!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusamus similique eligendi voluptatem, quam non!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusamus similique eligendi voluptatem, quam non!
                </p>
                <Button children="Subscribe" outline={true}/>
            </div>
            <div className="not-sidebar stack not-sidebar__container">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quidem at magnam inventore facere totam, odio nostrum fugiat rerum amet eveniet, modi, saepe fugit quod numquam dolor ex dicta ullam necessitatibus cupiditate deleniti beatae vel minus! Vitae molestias quod repellat? At hic tempore doloremque omnis nihil! Pariatur culpa facilis saepe!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quidem at magnam inventore facere totam, odio nostrum fugiat rerum amet eveniet, modi, saepe fugit quod numquam dolor ex dicta ullam necessitatibus cupiditate deleniti beatae vel minus! Vitae molestias quod repellat? At hic tempore doloremque omnis nihil! Pariatur culpa facilis saepe!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quidem at magnam inventore facere totam, odio nostrum fugiat rerum amet eveniet, modi, saepe fugit quod numquam dolor ex dicta ullam necessitatibus cupiditate deleniti beatae vel minus! Vitae molestias quod repellat? At hic tempore doloremque omnis nihil! Pariatur culpa facilis saepe!</p>
            </div>
         </div>   
        </>
    )
}
export default Sidebar;