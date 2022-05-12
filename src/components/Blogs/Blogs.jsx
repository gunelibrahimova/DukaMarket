import React from 'react'
import { Link } from 'react-router-dom'
import '../Blogs/blog.scss'

function Blogs() {
    return (
        <div id='blog'>
            <div className="top">
                <div className="image">
                    <img src="https://cdn.pixabay.com/photo/2022/01/21/15/32/subway-6955069_960_720.jpg" alt="" />
                    <div className="text">
                        <h1>Blog</h1>
                        <span> <Link to="/">Home</Link>  / Blog</span>
                    </div>
                </div>
            </div>
           

        </div>
    )
}

export default Blogs