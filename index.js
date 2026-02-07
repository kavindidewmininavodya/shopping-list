import { DB_URL } from "./config";

const appSettings = {
    databaseURL: DB_URL
}

const inputField = document.getElementById('input-field');
const addButton = document.getElementById('add-button');

addButton.addEventListener("click", function(){
    let fieldValue = inputField.value;
    alert(fieldValue);
})