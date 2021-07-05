class Category{

    static all = []
    static categoryContainer = document.getElementById("categories-contianer")
    static categoryForm = document.getElementById("form-category-container")
    static createExpencebttn = document.getElementById("create-exp")

    constructor({id, name}) {
        this.id = id
        this.name = name

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `category-${this.id}`
        this.element.addEventListener('click', this.handleClick)

        Category.all.push(this)
    }

    categoryHTML() {
        this.element.innerHTML += `
        <div>
            <h3>${this.name} ${this.id}</h3>
        </div>
        <button id='delete-bttn'>Delete</button>
        <button id='create-exp'>Add Expense</button>
        <div id="expenses-contianer-${this.id}">
        
    
        </div>
        `
        return this.element
    }

    addToDom() {
        Category.categoryContainer.append(this.categoryHTML())
    }

    static renderFormCategory(){
        Category.categoryForm.innerHTML += `
        <form id="new-category-form">
            New category: <input type="text" id=name>
            <input type="submit" id="create">
        </form>
        `
    }

    handleClick(){
        if (event.target.innertext === 'Delete' ) {
            expenseService.deleteContact
        }
    }

    


}