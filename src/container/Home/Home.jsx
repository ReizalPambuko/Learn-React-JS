import React, { Component, Fragment } from "react";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import YouTubeComp from "./YoutubeComp/YouTubeComp";
import BlogPost from "../BlogPost/BlogPost";


import "./Home.css";
import StateFullComponent from "../StateFullComponent/StateFullComponent";
import DetailPost from "../BlogPost/DetailPost/DetailPost";



class Home extends Component{
    render(){
        return(
            <Router>
                <Fragment>
                    <div>
                        <Link to="/">Blog</Link>
                        <Link to="/state">StateFull</Link>
                        <Link to="/youtube">Youtube</Link>
                    </div>  
                    <Route exact path="/" component={BlogPost} />
                    <Route path="/state" component={StateFullComponent} />
                    <Route path="/youtube" component={YouTubeComp} />
                    <Route path="/detail-post/:postID" component={DetailPost} />
                </Fragment>
            </Router>
        )
    }
}

export default Home;