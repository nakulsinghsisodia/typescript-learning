
function make(item: string|number){
    if(typeof item === "string"){
        return `Item: ${item}`
    }
    else{
        return `Item: #${item}`
    }
}

function makeItem(msg? : string){
    if(msg){
        return msg
    }
    else{
        return 'Default item'
    }
}

function itemSize(size: "small"|"big"|number){
    if(size === "small"){
        return `making small item`
    }
    if(size === "big"){
        return `making big item`
    }
    return `making item of size ${size}`
}

class Item1{
    work(){
        return 'item1 working'
    }
}

class Item2{
    work(){
        return 'item2 working'
    }
}

function working(obj: Item1|Item2){
    if (obj instanceof Item1){
        return obj.work()
    }
    return obj.work()
}

type androidMobile = {
    os : "android",
    store: "play store"
}

function isAndroidMobile(mobile : any): mobile is androidMobile{
    return (
        typeof mobile == 'object' &&
        mobile != null &&
        mobile.os === 'android' &&
        mobile.store === 'play store'
    )
}

function buyAndroid(mobile : androidMobile | any){
    if(isAndroidMobile(mobile)){
        return 'buying android mobile'
    }
    return 'buying non android mobile'
}


type masalaChai = {
    kind : "masala"
    spicelevel : "high"
}
type elaichiChai = {
    kind : "elaichi"
    milkamount : "less"
}

type chai = masalaChai | elaichiChai

function chaiLa(tea:chai){
    switch(tea.kind){
        case 'masala':
            break
        case 'elaichi':
            break
        default:
            //something
    }
}

function brew(order : masalaChai|elaichiChai){
    if("spicelevel" in order){
        //
    }
}

function someOperation(ip : unknown){
    if(typeof ip === 'string'){
        return ip.toUpperCase()
    }
    return `ja na`
}