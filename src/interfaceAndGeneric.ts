//interface for function

interface DiscountCall {
    (p:number):number
}

const apply50: DiscountCall = (p)=>{return p*0.5}

// interface for function in obj

interface TeaMachine {
    start(p:string):void

    stop(p:string):void
}

const machine: TeaMachine = {
    start(p) {
        
    },
    stop(p) {
        
    },
}

// index signature

interface ChaiRating{
    [flavor:string] : number
}

const rating : ChaiRating = {
    mausambi : 5,
    adrak : 2
}

// merging interfaces

interface User{
    name: string
}

interface User{
    age :number
}

const u : User = {
    name:"nakul",
    age: 21
}

// extending interface
 interface a{a:string}
 interface b{b:string}

 interface c extends a,b{}



// Generics


function warpInArray <T>(item:T): T[]{
    return [item]
}

warpInArray("nakul")
warpInArray(21)
warpInArray({flavour:"ginger"})

function pair<A,B>(a:A,b:B) :[A,B] {
    return [a,b]
}

pair("hello",9)

// generics with interface

