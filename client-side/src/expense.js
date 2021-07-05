class Expense {

    static all = []
    static expenseContainer = document.getElementById("expenses-contianer")
    static expenseForm = document.getElementById("form-container")

    constructor({id, name, amount, category_id, due_date}) {
        this.id = id
        this.name = name
        this.amount = amount
        this.category_id = category_id
        this.due_date = due_date

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `expense-${this.id}`

        Expense.all.push(this)
    }

    expenseHTML() {
        this.element.innerHTML += `
        <div>
            <h3>${this.name}</h3>
            <p>${this.amount}</p>
            <p>${this.due_date}</p>
            <p>${this.category_id}</p>
        </div>
        `
        return this.element
    }

    addToDom() {
        Expense.expenseContainer.append(this.expenseHTML())
    }


    static renderFormexpense() {
        Expense.expenseForm.innerHTML += `
        <form id="new-expense-form">
        Name: <input type='text' id=name>
        amount: <input type="integer" id='amount'>
        due_date: <input type='text' id='due_date'>
        Category ID number <input type='integer' id='category_id'>
        something else to tes <input type='stings' id='somehting'>
        <input type="submit" id="create">
        </form>
        `
    }
    
}