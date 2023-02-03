import React, { Component } from "react";
// import YouTubeComp from "../component/YoutubeComp/YouTubeComp";
// import "./Home.css";
// import Product from "./Product/Product";
// import LifeCycleComp from "./LifeCycleComp/LifeCycleComp";
import BlogPost from "./BlogPost/BlogPost";

class Home extends Component{
    state = {
        showComponent: true
    }

    componentDidMount(){
        
    }



    render(){
        return(
            <div>
                {/* <p>lifeCycleComp</p>
                <hr />
                    
                        this.state.showComponent 
                        ? <LifeCycleComp /> : null */}

                    <p>BlogPost</p>
                    <hr />
                    <BlogPost />
            </div>
        )
    }
}

export default Home;