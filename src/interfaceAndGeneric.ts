//interface for function

interface DiscountCall {
    (p:number):number
}

const apply50: DiscountCall = (p)=>{return p*0.5}


