import React from 'react';
import axios from "../Services/instance";
export default function Create() {

    const submitHandler = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        const author = event.target.author.value;
        const data = { title, body, author };
        axios.
            post("posts", data

            )
            .then((response) => {
                console.log(response);
                event.target.reset();

            })
            .catch((error) => {
                console.log(error);

            })

    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <h3 className="mb-4">Create a post...</h3>

                    <form name="sentMessage" id="contactForm" onSubmit={submitHandler}>

                        {/* Title Field */}
                        <div className="form-group mb-3">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    placeholder="Title"
                                    required
                                    name="title"
                                />
                                <label htmlFor="title">Title</label>
                            </div>
                            <p className="help-block text-danger"></p>
                        </div>

                        {/* Body Field */}
                        <div className="form-group mb-3">
                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    id="body"
                                    placeholder="Body"
                                    style={{ height: '150px' }} // React style object
                                    required
                                    name="body"
                                ></textarea>
                                <label htmlFor="body">Body</label>
                            </div>
                            <p className="help-block text-danger"></p>
                        </div>

                        {/* Author Field */}
                        <div className="form-group mb-3">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="author"
                                    placeholder="Author"
                                    required
                                    name="author"
                                />
                                <label htmlFor="author">Author</label>
                            </div>
                            <p className="help-block text-danger"></p>
                        </div>

                        {/* Submit Button */}
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary text-uppercase"
                                id="sendMessageButton"
                            >
                                Send
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
// <div className="container px-4 px-lg-5">
//     <div className="row gx-4 gx-lg-5 justify-content-center">
//         <div className="col-md-10 col-lg-8 col-xl-7">
//             <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
//             <div className="my-5">

//                 <form name='sendMessage' id="contactForm" onSubmit={sumbitHandler}>
//                     <div className="form-floating">
//                         <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
//                         <label htmlFor="name">Name</label>
//                         <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
//                     </div>
//                     <div className="form-floating">
//                         <input className="form-control" id="email" type="email" placeholder="Enter your email..." data-sb-validations="required,email" />
//                         <label htmlFor="email">Email address</label>
//                         <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
//                         <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
//                     </div>
//                     <div className="form-floating">
//                         <input className="form-control" id="phone" type="tel" placeholder="Enter your phone number..." data-sb-validations="required" />
//                         <label htmlFor="phone">Phone Number</label>
//                         <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
//                     </div>
//                     <div className="form-floating">
//                         <textarea
//                             className="form-control"
//                             id="message"
//                             placeholder="Enter your message here..."
//                             style={{ height: '12rem' }}
//                             data-sb-validations="required"
//                         ></textarea>
//                         <label htmlFor="message">Message</label>
//                         <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
//                     </div>
//                     <br />

//                     <div className="d-none" id="submitSuccessMessage">
//                         <div className="text-center mb-3">
//                             <div className="fw-bolder">Form submission successful!</div>
//                             To activate this form, sign up at
//                             <br />
//                             <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
//                         </div>
//                     </div>

//                     <div className="d-none" id="submitErrorMessage">
//                         <div className="text-center text-danger mb-3">Error sending message!</div>
//                     </div>

//                     <button className="btn btn-primary text-uppercase disabled" id="submitButton" type="submit">Send</button>
//                 </form>
//             </div>
//         </div>
//     </div>
// </div>
//     )
// }
