// array

const chaiFlavor : string[] = ["masala",'adrak']
const chaiPrices : number[] = [15,20]

const chaiRating : Array<number> = [5,4.9]

type Chai = {
    name : string
    price : number
}

const menu : Chai[] = [
    {name: "masala", price: 15},
    {name: "masala 2.0", price: 25}
]

const cities : readonly string[] = ["jaipur","pune"]
// cities.push("delhi")


const matrix : number[][] = [
    [1,2,3],
    [4,5,6]
]

// tuple

let chaiTuple : [string,number]

chaiTuple = ["adrak",15]
// chaiTuple = [20,"masala"]

let userInfo : [string,number,boolean?]

userInfo = ["abc",100]
userInfo = ["abc",100,true]

const location : readonly [number,number] = [2.33,45.6]

const chaiItems : [name:string,price:number] = ["masala",10]
