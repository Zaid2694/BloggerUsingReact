// import React, { useState } from 'react'
import React from 'react'


export default function Home(props) {
    // const [name, setName] = useState("Zaid");
    // const [old, setOld] = useState(0);

    return (
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">

                    {props.children}
                </div>
            </div>
        </div>
    )
}



//  <hr className="my-4" />
//                     {/* <!-- Post preview--> */}
//                     <div className="post-preview">
//                         <a href="post.html">
//                             <h2 className="post-title">I believe every human has a finite number of heartbeats. I don't intend
//                                 to waste any of mine.</h2>
//                         </a>
//                         <p className="post-meta">
//                             Posted by
//                             <a href="#!">Start Bootstrap</a>
//                             on September 18, 2023
//                         </p>
//                     </div>
//                     {/* <!-- Divider--> */}
//                     <hr className="my-4" />
//                     {/* <!-- Post preview--> */}
//                     <div className="post-preview">
//                         <a href="post.html">
//                             <h2 className="post-title">Science has not yet mastered prophecy</h2>
//                             <h3 className="post-subtitle">We predict too much for the next year and yet far too little for the
//                                 next ten.</h3>
//                         </a>
//                         <p className="post-meta">
//                             Posted by
//                             <a href="#!">Start Bootstrap</a>
//                             on August 24, 2023
//                         </p>
//                     </div>
//                     {/* <!-- Divider--> */}
//                     <hr className="my-4" />
//                     {/* <!-- Post preview--> */}
//                     <div className="post-preview">
//                         <a href="post.html">
//                             <h2 className="post-title">Failure is not an option</h2>
//                             <h3 className="post-subtitle">Many say exploration is part of our destiny, but it’s actually our
//                                 duty to future generations.</h3>
//                         </a>
//                         <p className="post-meta">
//                             Posted by
//                             <a href="#!">Start Bootstrap</a>
//                             on  Nov 31, 2026
//                         </p>
//                     </div>
//                     <hr className="my-4" />
//                     <div className="d-flex justify-content-end mb-4">
//                         {/* <a class="btn btn-primary text-uppercase" onClick={() => {
//                             setOld(!old);
//                             console.log(old);
//                         }} href="#!">Older
//                             Posts{old} →</a> */}
//                         <a class="btn btn-primary text-uppercase" href="#!">Older
//                             Posts →</a>
//                     </div>