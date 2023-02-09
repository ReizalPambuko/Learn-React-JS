import React, { Component } from "react";
import axios from "axios";


class DetailPost extends Component{

    state = {
        postData: {
            title: '',
            body: ''
        }
    }
        
    componentDidMount(){
        let id = this.props.match.params.postID;
        axios.get(`http://localhost:3004/posts/${id}`)
        .then(res => {
            let post = res.data;
            this.setState({
                postData:{
                    title: post.title,
                    body: post.body
                }
        })
    })
}

    render(){
        return(
            <div>
                <h3>{this.state.postData.title}</h3>
                <p>{this.state.postData.body}</p>
            </div>
        )
    }
}

export default DetailPost;