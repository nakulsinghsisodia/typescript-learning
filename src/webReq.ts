// axios

import axios, {type AxiosResponse} from 'axios'

interface ToDo {
    userId: number
    id: number
    title : string
    completed: boolean
}

const fetchToDo = async () =>{
    try{
        const res : AxiosResponse<ToDo> = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log(res.data);
    }catch(err:any){
        console.log(err);
    }
}