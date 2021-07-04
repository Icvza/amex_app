class User{

    static all = []
    static userContainer = document.getElementById("users-contianer")
    static userForm = document.getElementById("form-user-container")

    constructor({id, name,}) {
        this.id = id
        this.name = name

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `user-${this.id}`

        User.all.push(this)
    }

    userHTML() {
        this.element.innerHTML += `
        <div>
            <h3>${this.name}</h3>
        </div>
        `
        return this.element
    }

    addToDom() {
        User.userContainer.append(this.userHTML())
    }

    static renderFormUser() {
        User.userForm.innerHTML += `
        <form id="new-user-form">
        Name: <input type='text' id=name>
        <input type="submit" id="create">
        </form>
        `
    }

}