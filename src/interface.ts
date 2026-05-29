// interface : sirf obj and classes k liye

interface user{
    name: string
    age: number
}

interface superUser extends user{
    role: "admin"|"superadmin"
}

const user1 : user= {
    name: 'user1',
    age: 21
}

const admin: superUser={
    name:"a",
    age:21,
    role:"admin"
}

// union in type
// inme se hi hogi value

type role = "admin"|"user"

const rahul:role = 'admin'

type linux = {
    os: 'linux',
    size: "less"
}

type windows = {
    os: 'windows',
    size: "more"
}

type system = linux|windows

const loq:system = {
    os:'windows',
    size:'more'
}

// intersection in type
// dono ka combination

type filling = {
    filling: "onion"
}

type fry = {
    fry: "oil fry"
}

type kachori = filling & fry

const pyazLachori: kachori = {
    filling: 'onion',
    fry:'oil fry'
}

// optional type

type userType = {
    username : string
    bio? : string
}   

const u1:userType = {
    username: "avs"
}
const u2:userType = {
    username: "avs2",
    bio: "hello"
}


// read only type

type app = {
    readonly appName: string
    version : Number
}

const recurly: app={
    appName: "Recurly",
    version: 1.0
}

// recurly.appName='a' error de rha h