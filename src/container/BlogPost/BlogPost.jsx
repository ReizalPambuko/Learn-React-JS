import React, {Component,Fragment} from "react";
import "./BlogPost.css";
import Post from "../../component/Post/Post";
import axios from "axios";

class BlogPost extends Component{
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        }
    }

    getPokeApi = () => {
        axios.get("http://localhost:3004/posts")
        .then(res => {
            this.setState({
                post: res.data
            })
        })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`)
        .then((res) => {
            this.getPokeApi();
        })
    }

    componentDidMount(){
        this.getPokeApi()
    }

    hadleFormChange = (event) => {
        console.log('Form Change',event.target)
        let title = event.target.value;
        console.log('value formBlogPost',this.state.formBlogPost)  
    }

    render(){
        return(
            <Fragment>
                <p className="sectionPost">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title :</label>
                    <br />
                    <input type="text" id="title" placeholder="add Title" onChange={this.hadleFormChange}/>
                    <br />
                    <label htmlFor="body-content">Blog Content :</label>
                    <br />
                    <textarea name="body-content" id="body-content" cols="30" rows="10" placeholder="add Block Content" onChange={this.hadleFormChange}></textarea>
                    <br />
                    <button className="btn-submit">Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                            return <Post key={post.id} data={post} remove={this.handleRemove} />
                    })                
                }
            </Fragment> 
        )
    }
}

export default BlogPost;