// Base_url save endpoint as a variable so we dont keep writing it 
const base_url = "http://127.0.0.1:3000"



//Expense Logic
//Create a new instance of expenseSerivce when this variable is called
const expenseService  =  new ExpenseService(base_url)
//call new instance and call upon the get function
expenseService.getExpenses()
//call on the render form fucntion from the expense class
Expense.renderFormexpense()
//Handle the form click evebt 
Expense.expenseForm.addEventListener('submit', handleSubmitExpense)

function handleSubmitExpense(){
    event.preventDefault()
    expenseService.createExpense()
}


//category Logic
const categoryService =  new CategoryService(base_url)
categoryService.getCategory()
Category.renderFormCategory()
Category.categoryForm.addEventListener('submit', handleSubmitCategory)


function handleSubmitCategory() {
    event.preventDefault()
    categoryService.createCategory()
}


function somethingHandle(){
    debugger
}