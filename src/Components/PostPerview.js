import React from 'react'
import { Link } from 'react-router-dom'

export default function PostPerview(props) {
    return (
        // {/* <button type='button' className='btn' onClick={() => setName("Uzma")}>
        //                     change {name}
        //                 </button> */}
        //                 {/* <!-- Post preview--> */}
        <>
            <div className="post-preview">
                <Link to="#">
                    <h2 className="post-title">{props.title}</h2>
                    <h3 className="post-subtitle">{props.body}</h3>
                    {/* <p className="post-meta">
                    Posted by
                    <a href="#!">Start Bootstrap</a>
                    on September 24, 2023
                </p> */}
                    <button type='button' className='btn btn-danger' onClick={props.delete}>Delete</button>
                </Link>
            </div>
        </>
    )
}
