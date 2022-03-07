import axios from "axios"
import URL from '../DATA/URL.jsx';
export default function call (method,path,body){
    if(method === 'POST' || method==='PUT' && body === null) {
        console.log('Phương thức POST cần dữ liệu');
        return ;
    }
    return (axios({
        method : method,
        url : URL+'/'+path,
        data : body
    }));
}
