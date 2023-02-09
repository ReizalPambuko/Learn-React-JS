import React, {Component,Fragment} from "react";
import "./BlogPost.css";
import Post from "./Post/Post";
import axios from "axios";

class BlogPost extends Component{
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        updateData: false
    }

    getPokeApi = () => {
        axios.get("http://localhost:3004/posts?_sort=id&_order=desc")
        .then(res => {
            this.setState({
                post: res.data,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1                
                },
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
        //console.log('Form Change',event.target);
        let formBlogPostNew = {...this.state.formBlogPost};
        let timeStamp = new Date().getTime();
        if(!this.state.updateData){
            formBlogPostNew['id'] = timeStamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        let title = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        },(err) => console.log('err',err))
    }
    
    postDataToApi = () => {
        axios.post('http://localhost:3004/posts',this.state.formBlogPost)
        .then(res => console.log(res))
        this.getPokeApi();
    }

    putDataToApi = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`,this.state.formBlogPost)
        .then(res => {
            this.getPokeApi();
            this.setState({
                updateData: false,
                    formBlogPost: {
                id: 1,
                title: '',
                body: '',
                userId: 1
            }
            })
        })
    }

    handleSubmit = () => {
        if(this.state.updateData){
            this.putDataToApi();
        }
        else{
            this.postDataToApi();
        }
    }

    updateSub = (data) => {
        console.log(data)
        this.setState({
            formBlogPost: data,
            updateData: true       
        })
    }
    

    dataDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)
    }
    
    render(){
        return(
            <Fragment>
                <p className="sectionPost">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title :</label>
                    <br />
                    <input type="text" name="title" value={this.state.formBlogPost.title} id="title" placeholder="add Title" onChange={this.hadleFormChange}/>
                    <br />
                    <label htmlFor="body">Blog Content :</label>
                    <br />
                    <textarea name="body" id="body" value={this.state.formBlogPost.body} cols="30" rows="10" placeholder="add Block Content" onChange={this.hadleFormChange}></textarea>
                    <br />
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                            return <Post key={post.id} data={post} remove={this.handleRemove} update={this.updateSub} detail={this.dataDetail} />
                    })                
                }
            </Fragment> 
        )
    }
}

export default BlogPost;