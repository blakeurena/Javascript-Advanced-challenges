# JavaScript Rating, Sorting, and API Practice

This project contains JavaScript practice challenges focused on:

* Star rating logic
* Sorting arrays
* Sorting objects
* Fetching data from APIs
* Filtering API responses
* Working with `async/await`

The goal of this project is to strengthen understanding of core JavaScript concepts including loops, array methods, asynchronous programming, and working with JSON data.

---

# Project Structure

```
javascript-practice/
│
├── index.html
├── app.js
└── README.md
```

* **index.html** – Loads the JavaScript file
* **app.js** – Contains all functions and exercises
* **README.md** – Project documentation

---

# How to Run the Project

## Run in the Browser

1. Open `index.html`
2. Right click anywhere on the page
3. Click **Inspect**
4. Open the **Console** tab

The function results will appear in the console.

---

## Run with Node.js

If you have Node installed:

```
node app.js
```

Note: API examples using `fetch()` may require a modern environment.

---

# Functions Included

## 1. Show Rating

Creates a star rating system using:

* `★` full star
* `½` half star
* `☆` empty star

```
showRating(rating)
```

Example:

```
showRating(4.5)
```

Example Output:

```
★★★★½
```

---

## 2. Sort High to Low

Sorts numbers from highest to lowest using the `sort()` method.

```
sortHighToLow(arr)
```

Example:

```
sortHighToLow([1,3,5,2,4])
```

Output:

```
[5,4,3,2,1]
```

---

## 3. Sort Objects by Price

The sorting logic can also work with objects when comparing a property like `price`.

Example input:

```
[
 { id: 1, price: 50 },
 { id: 2, price: 0 },
 { id: 3, price: -500 }
]
```

Expected sorted output (highest price first):

```
[
 { id: 1, price: 50 },
 { id: 2, price: 0 },
 { id: 3, price: -500 }
]
```

---

## 4. Fetch Posts by User

Retrieves posts from the JSONPlaceholder API and filters them by `userId`.

```
postByUser(userId)
```

Example:

```
postByUser(4)
```

This returns all posts created by user `4`.

API used:

```
https://jsonplaceholder.typicode.com/posts
```

---

## 5. Filter Incomplete Tasks

Fetches todo items and filters only the incomplete ones.

```
firstSixIncompleteTasks(userId)
```

Example:

```
firstSixIncompleteTasks(6)
```

API used:

```
https://jsonplaceholder.typicode.com/todos
```

Currently the function returns all incomplete tasks.

---

# Concepts Practiced

This project helps reinforce:

* `for` loops
* Conditional statements
* Array sorting
* Array filtering
* Working with objects
* Fetch API
* `async/await`
* JSON data handling
* JavaScript problem solving

---

# Possible Improvements

Future improvements could include:

* Sorting objects directly by `price`
* Returning only the **first 6 incomplete tasks**
* Filtering tasks by **userId**
* Adding `try/catch` error handling
* Displaying API results on the webpage instead of only the console
* Creating UI components for ratings and lists

---

# Author

Built as part of JavaScript learning and practice exercises.
