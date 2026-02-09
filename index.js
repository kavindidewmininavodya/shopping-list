import { DB_URL, initializeApp, getDatabase, ref, push, onValue, remove, update } from "./config.js";

const appSettings = { databaseURL: DB_URL };
const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const inputField = document.getElementById('input-field');
const addButton = document.getElementById('add-button');
const shoppingListEl = document.getElementById('shopping-list');

onValue(shoppingListInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val()); // Gets [ID, Data]
        
        clearShoppingListEl();
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i];
            appendItemToShoppingListEl(currentItem);
        }
    } else {
        shoppingListEl.innerHTML = "No items here... yet";
    }
});

addButton.addEventListener("click", function() {
    let inputValue = inputField.value;
    if (inputValue.trim() !== "") {
        // We push an object now to track 'completed' status
        push(shoppingListInDB, {
            name: inputValue,
            completed: false
        });
        clearInputField();
    }
});

function clearInputField() { inputField.value = ""; }
function clearShoppingListEl() { shoppingListEl.innerHTML = ""; }

function appendItemToShoppingListEl(item) {
    let itemID = item[0];
    let itemValue = item[1].name || item[1]; // Handles both string and object formats
    let isCompleted = item[1].completed ? "completed" : "";

    let newEl = document.createElement("li");
    newEl.textContent = itemValue;
    if (isCompleted) newEl.classList.add("done");

    newEl.addEventListener("click", function() {
        let exactLocationInDB = ref(database, `shoppingList/${itemID}`);
        update(exactLocationInDB, {
            completed: !item[1].completed
        });
    });

    newEl.addEventListener("dblclick", function() {
        let exactLocationInDB = ref(database, `shoppingList/${itemID}`);
        remove(exactLocationInDB);
    });

    shoppingListEl.append(newEl);
}