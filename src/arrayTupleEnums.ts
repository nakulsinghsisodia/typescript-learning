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

