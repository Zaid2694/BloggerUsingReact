


import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Post from './Components/Post'
import Contact from './Components/Contact'
import PostPerview from "./Components/PostPerview";
import Create from "./Components/Create";
import axios from "../src/Services/instance";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: false,
      posts: null,
    };

  }
  componentDidMount() {
    axios
      .get("posts")
      .then((response) => {
        this.setState({ posts: response.data }, () => console.log(this.state));
      })
      .catch((error) => {
        console.log(error);

      })
  }

  authHandler = () => {
    this.setState({ auth: !this.state.auth });
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[App] getDerivedStateFromProps");
  //   return null;
  // }
  // componentDidMount() {
  //   this.setState({ auth: true });
  //   console.log("[App] componentDidMount");

  // };
  deleteHnadler = (id) => {
    axios.delete("posts/" + id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);

      })
  };
  render() {
    let posts = null;
    if (this.state.posts != null) {
      console.log(this.state.posts);
      const tenPosts = this.state.posts.splice(0, 10);
      console.log(tenPosts);
      posts = tenPosts.map((post) => {
        return <PostPerview
          delete={() => this.deleteHnadler(post.id)}
          key={post.id} title={post.title} body={post.body} />
      });
    }
    return (
      <Router>
        <Navbar login={this.authHandler} status={this.state.auth} />

        <Routes>
          <Route
            path="/about"
            element={
              <>
                <Header title="About Us" img="about-bg.jpg" />
                <About />
                <Footer />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <Header title="Contact Me" img="contact-bg.jpg" />
                <Contact />

                <Footer />
              </>
            }
          />

          <Route
            path="/post"
            element={
              // this.state.auth === false ? (
              //   <Navigate to="/" replace />
              // ) : (
              <>
                <Header title="Man must explore..." img="post-bg.jpg" />
                <Post />
                <Footer />
              </>
              //)
            }
          />

          <Route
            path="/"
            element={
              <>
                <Header title="Blogger" img="home-bg.jpg" />
                <Home>{posts} </Home>

                <Footer />
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                <Header title="Login" img="about-bg.jpg" />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    )

  }
}

export default App













