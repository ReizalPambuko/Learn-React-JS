import axios from "axios";
import { onlineRoot, RootPath } from "./Config";

const Delete = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${root ? onlineRoot : RootPath}/${path}`)
        .then(result => {
            resolve(result);
        }, (err) => {
            reject(err)
        })
    })
    return promise;
}



export default Delete;       