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
