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