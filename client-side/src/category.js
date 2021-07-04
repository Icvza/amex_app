class Category{

    static all = []
    static categoryContainer = document.getElementById("cuategorys-contianer")
    static categoryForm = document.getElementById("form-category-container")

    constructor({id, name,}) {
        this.id = id
        this.name = name

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `cuategory-${this.id}`

        Category.all.push(this)
    }

    categoryHTML() {
        this.element.innerHTML += `
        <div>
            <h3>${this.name}</h3>
        </div>
        `
        return this.element
    }

    addToDom() {
        Category.categoryContainer.append(this.categoryHTML())
    }

    static renderFormCategory() {
        Category.categoryForm.innerHTML += `
        <form id="new-category-form">
        Category <input type='text' id=name>
        <input type="submit" id="create">
        </form>
        `
    }

}