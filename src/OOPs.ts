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


class ModernChai{
    private _sugar : number = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value:number){
        this._sugar = value
    }
}

const c = new ModernChai()
c.sugar = 2
console.log(c.sugar);

class EkChai{
    static name = "Elaichi"

    constructor(public flavor: string){}
}

console.log(EkChai.name);

abstract class Drink{
    abstract make() : void
}

class MyChai extends Drink{
    make(){

    }
}

class Heater{
    heat(){

    }
}

class CahiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat()
    }
}