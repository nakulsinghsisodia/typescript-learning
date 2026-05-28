// force type assertion
let res:any = '42'
let len:number = (res as string).length

type book = {
    name: string
}

let bookString = '{"name":"atomic habit"}'
let bookObj = JSON.parse(bookString) as  book

console.log(bookObj.name);


// type assertion in html

const ip = document.getElementById('input') as HTMLInputElement


try{

}catch(error){
    if (error instanceof Error){
        console.log(error.message);
    }
    else console.log(error);
}


const data:unknown = 'asd'

const strData:string = data as string


// never type

type Role = 'admin'|'user'

function who(role:Role):void{
    if(role === 'admin'){
        // something
        return
    }
    if(role === 'user'){
        // something
        return
    }
    role
}