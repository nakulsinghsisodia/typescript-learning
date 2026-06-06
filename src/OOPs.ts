class Chai{
    flavour: string
    price: number

    constructor (flavour: string, price:number){
        this.flavour = flavour
        this.price = price
    }
}

const masalaChai = new Chai("masala",12)


class Tea{
    public flavour : string = 'Elaichi'
    private secretIng = 'boil for 2min'

    reveal(){
        return this.secretIng
    }
}

new Tea().reveal()

class Shop{
    protected shopName = "Chai corner"
}

class Branch extends Shop{
    getName(){
        return this.shopName
    }
}

new Branch().getName()

class Walet{
    #walet = 120 //private in js
    _balance = 30 //protected
}

class Cup{
    readonly size : number = 250

    constructor(s:number){
        this.size = s
    }
}

