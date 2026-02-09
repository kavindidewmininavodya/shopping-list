# 🛒 Shopping List Web App

A simple shopping list web application built with **HTML, CSS, JavaScript, and Firebase Realtime Database**.
Users can add items to a shopping list, which are stored in a real-time cloud database.

---

## 🚀 Features

* Add shopping list items
* Store data in Firebase Realtime Database
* Clear input field after submission
* Simple and clean user interface
* Real-time cloud storage integration

---

## 🧰 Technologies Used

* **HTML5** – Structure
* **CSS3** – Styling
* **JavaScript (ES6 Modules)** – Logic
* **Firebase Realtime Database** – Backend database
* **Firebase CDN SDK**

---

## 📂 Project Structure

```bash
shopping-list-app/
│
├── index.html
├── index.css
├── index.js
├── firebase.js        # Firebase imports & initialization
├── config.js           # Database URL configuration
├── assets/
│   └── shopping-cart.png
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/shopping-list-app.git
cd shopping-list-app
```

---

### 2️⃣ Create Firebase Project

1. Go to 👉 [https://console.firebase.google.com](https://console.firebase.google.com)
2. Create a new project
3. Enable **Realtime Database**
4. Copy your **Database URL**

---

### 3️⃣ Add Firebase Config

Create a file `config.js`:

```js
export const DB_URL = "YOUR_FIREBASE_DATABASE_URL";
```

---

### 4️⃣ Run the App

Just open:

```bash
index.html
```

in your browser (or use Live Server in VS Code).

---

## 📸 Screenshot

*(Add your app screenshot here)*

```md
![Shopping List App](assets/screenshot.png)
```

---

## 🔐 Firebase Security Rules (Basic)

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

⚠️ For production, secure your database rules.

---

## 📌 Future Improvements

* Display shopping list items on the page
* Delete items from list
* Edit list items
* User authentication
* Responsive mobile UI
* Offline support

---

## 👩‍💻 Author

**Kavindi Navodya Dewmini**
Student / Developer

---

## 📄 License

This project is for educational purposes.
You are free to use and modify it.

---

