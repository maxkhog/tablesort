async function getUser (id){
    return Promise.resolve({id: 1})
}

getUser(1).then(user => console.log(user))
