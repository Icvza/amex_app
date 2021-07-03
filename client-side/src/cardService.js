class CardService {

    constructor(endpoint){
        this.endpoint = endpoint
    }

    getCards(){
        fetch(`${this.endpoint}/cards`)
        .then(resp => resp.json())
        .then(cards => {
            debugger
        })
    }


}