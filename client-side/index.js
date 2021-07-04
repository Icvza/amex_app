const base_url = "http://127.0.0.1:3000"
const expenseService  =  new ExpenseService(base_url)
expenseService.getExpenses()
Expense.renderFormexpense()
Expense.expenseForm.addEventListener('submit', handleSubmitExpense)

function handleSubmitExpense(){
    event.preventDefault()
    expenseService.createExpense()
}


const userService =  new UserService(base_url)
userService.getUsers()
User.renderFormUser()
User.userForm.addEventListener('submit', handleSubmitUser)


function handleSubmitUser(){
    event.preventDefault()
}

const categoryService =  new CategoryService(base_url)
categoryService.getCategory()
Category.renderFormCategory()
Category.categoryForm.addEventListener('submit', handleSubmitCategory)


function handleSubmitCategory(){
    event.preventDefault()
}