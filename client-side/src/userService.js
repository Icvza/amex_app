class UserService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

    getUsers(){
        fetch(`${this.endpoint}/users`)
        .then(resp => resp.json())
        .then(users => {
            for (const user of users) {
                const x = new User(user)
                x.addToDom()
            }
        })
    }


}