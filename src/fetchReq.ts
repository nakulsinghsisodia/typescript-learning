interface ToDo {
    userId: number
    id: number
    title : string
    completed: boolean
}

const fetchTodo = async () =>{
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        if (!res.ok){
            throw new Error("");
        }
        const data : ToDo = await res.json()
    }catch(err:any){
        console.log(err);
    }
}