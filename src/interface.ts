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
