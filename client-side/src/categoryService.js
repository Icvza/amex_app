class CategoryService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

    getCategory(){
        fetch(`${this.endpoint}/categories`)
        .then(resp => resp.json())
        .then(categories => {
            for (category of categories ) {
                const x = new Category (category )
                x.addToDom()
            }
        })
    }


}