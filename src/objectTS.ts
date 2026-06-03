type Tea = {
    name: string
    quantity: number
    ing : string[]
}

const t1 : Tea = {
    name: 'adrak',
    quantity: 1,
    ing: ['milk','sugar']
}

type cup = {
    size: string
}

let small : cup = {
    size: '100ml'
}

let big = {
    size : '200ml',
    kind : 'adrak'
}

// small minimun type hold krta isiliye valid h after big 

small = big



type brew = {
    time : number
}

const coffee = {
    time : 1,
    beans: "east"
}

const blackCoffee: brew = coffee

type Item = {
    name: string
    price: number
}
type address = {
    pin: number
    street: string
}

type order = {
    id : number
    items: Item[]
    address: address
}


type Chai = {
    name: string
    price: number
    isHot: boolean
}

const updateChai = (update: Partial<Chai>)=>{
    console.log(update);
}

updateChai({})
updateChai({name:"adrak chai"})
updateChai({price: 40})

type chaiOrder = {
    name?:string
    price?:number
}

const placeOrder = (order: Required<chaiOrder>) => {
    console.log(order);
}

placeOrder({name:"a",price:3})

type tea = {
    name: string
    price : number
    isHot: boolean
    ingridients : string[]
}

type basicTeaInfo = Pick<tea,"name"|"price">

const teaInfo : basicTeaInfo = {
    name:"adrak",
    price:30
}

type teaNew = {
    name: string
    price : number
    isHot: boolean
    secretIngridients : string[]
}

// jo likhna ki need nhi h jaise secretIngridients ko nhi likhe to chalega
type publicTea = Omit<teaNew,"secretIngridients">
