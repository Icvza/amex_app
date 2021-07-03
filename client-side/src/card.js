class Card {

    static all = []

    constructor(id, name, welcome_o, minimum_spend, user_id) {
        this.id = id
        this.name = name
        this.welcome_o = welcome_o
        this.minimum_spend = minimum_spend
        this.user_id = user_id

        Card.all.push(this)
    }





}