// force type assertion
let res:any = '42'
let len:number = (res as string).length

type book = {
    name: string
}

let bookString = '{"name":"atomic habit"}'
let bookObj = JSON.parse(bookString) as  book

console.log(bookObj.name);