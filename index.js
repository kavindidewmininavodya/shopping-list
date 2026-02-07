import { DB_URL } from "./config.js";
import { initializeApp, getDatabase, ref, push } from "./config.js";

const appSettings = { databaseURL: DB_URL };

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const inputField = document.getElementById('input-field');
const addButton = document.getElementById('add-button');

addButton.addEventListener("click", function() {
    let fieldValue = inputField.value;
    
    push(shoppingListInDB, fieldValue);
    
    console.log(`${fieldValue} added to database`);
    
    inputField.value = ""; 
    
});