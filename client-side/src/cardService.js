class CardService {

    constructor(endpoint){
        this.endpoint = endpoint
    }

    getCards(){
        fetch(`${this.endpoint}/cards`)
        .then(resp => resp.json())
        .then(cards => {
            for (const card of cards) {
                const x = new Card(card)
                x.addToDom()
            }
        })
    }

    createCard() {
        const card = {
            minimum_spend: document.getElementById('minimum_spend').value,
            welcome_o: document.getElementById('welcome_o').value,
            name: document.getElementById('name').value,
            user_id: 2
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify(card)
        }
        
        fetch(`${this.endpoint}/cards`, configObj)
        .then(resp => resp.json())
        .then(card => {
            const v = new Card(card)
            console.addToDom
        })

    }


}