// any global variable will go here 
const base_url = "http://127.0.0.1:3000"
// const userService =  new UserService(base_url)
const cardService =  new CardService(base_url)
// any initailization of the application this is similar to ruby 
cardService.getCards()