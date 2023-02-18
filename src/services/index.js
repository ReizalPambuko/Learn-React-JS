import Get from "./Get";
import Post from "./Post";
import Put from "./Put";
import Delete from "./Delete";



//DELETE
const DeleteNews = (data) => Delete(`posts/${data}`, false)

//POST
const PostNewsBlog = (data) => Post('posts', false, data);

//PUT
const Updates = (data, id) => Put(`posts/${id}`, false , data);

//GET
const GetNewsBlog = () => Get('posts?_sort=id&_order=desc',false);
const GetComment = () => Get('comments',true);

const API  = {
    DeleteNews,
    Updates,
    PostNewsBlog,
    GetNewsBlog,
    GetComment
}

export default API;