class Card {

    static all = []
    static cardContainer = document.getElementById("cards-contianer")
    static cardForm = document.getElementById("form-container")

    constructor({id, name, welcome_o, minimum_spend, user_id}) {
        this.id = id
        this.name = name
        this.welcome_o = welcome_o
        this.minimum_spend = minimum_spend
        this.user_id = user_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `card-${this.id}`

        Card.all.push(this)
    }

    cardHTML() {
        this.element.innerHTML += `
        <div>
            <h3>${this.name}</h3>
            <p>${this.welcome_o}</p>
        </div>
        `
        return this.element
    }

    addToDom() {
        Card.cardContainer.append(this.cardHTML())
    }

    static renderFormCard() {
        Card.cardForm.innerHTML += `
        <form id="new-card-form">
        Name: <input type='text' id=name>
        Welcome Offer: <input type="text" id='welcome_o'>
        Minimum Spend: <input type='text' id='minimum_spend'>
        <input type="submit" id="create">
        </form>
        `
    }


}