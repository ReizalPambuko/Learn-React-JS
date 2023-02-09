import React from "react";
import "./Post.css"

const Post = (props) => {
    return(
                <div className="post">
                    <div className="img-thumb">
                        <img src="https://placeimg.com/200/150/tech" alt="" />
                    </div>
                    <div className="content">
                        <p className="title-dummy" onClick={() => props.detail(props.data.id)}>{props.data.title}</p>
                        <p className="desc">{props.data.body}</p>
                        <button className="update" onClick={() => props.update(props.data)}>Update</button>
                        <button className="remove" onClick={() => props.remove(props.data.id)}>remove</button>
                    </div>
                </div>
    )
}


export default Post;
