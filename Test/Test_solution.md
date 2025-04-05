Let's break everything down step by step in the **simplest way possible**, with examples so you truly understand **what** is happening and **why**.

---

## ✅ **Objective Questions – Explained Simply**

### 1. **Which is NOT a valid JavaScript data type?**  
Options: String, Boolean, Float, Number  
👉 **Answer: `Float`**  

**Why?**  
JavaScript uses only **`Number`** for all numbers — whole numbers and decimals.  
It doesn't have a separate type called `Float`.  

**Example:**  
```javascript
let a = 10;       // Number
let b = 10.5;     // Still a Number (even though it looks like a float)
```

---

### 2. **Correct way to declare a constant variable?**  
👉 **Answer: `const x = 10;`**

**Why?**  
- `const` means the value **can’t be changed**.
- `let` or `var` can change later.

**Example:**
```javascript
const age = 20; // Correct
age = 21;       // ❌ Error! Cannot change const
```

---

### 3. **Method to extract part of a string?**  
👉 **Answer: `slice()`**

**Why?**  
- `slice()` lets you cut a piece from a string.

**Example:**
```javascript
let name = "JavaScript";
let shortName = name.slice(0, 4); // Picks letters from index 0 to 3
console.log(shortName); // "Java"
```

---

### 4. **What will `Math.ceil(4.2)` return?**  
👉 **Answer: `5`**

**Why?**  
- `Math.ceil()` **rounds up** a number to the **next whole number**.

**Example:**
```javascript
Math.ceil(4.2); // 5
Math.ceil(7.01); // 8
```

---

### 5. **What does `typeof true` return?**  
👉 **Answer: `"boolean"`**

**Why?**  
- `true` and `false` are Boolean values.

**Example:**
```javascript
typeof true; // "boolean"
typeof false; // "boolean"
```

---

### 6. **How to check if an array includes a value?**  
👉 **Answer: `arr.includes(value)`**

**Why?**  
- It checks if something exists inside an array.

**Example:**
```javascript
let fruits = ['apple', 'banana'];
fruits.includes('banana'); // true
fruits.includes('mango'); // false
```

---

### 7. **What will `Number('10') + 5` return?**  
👉 **Answer: `15`**

**Why?**  
- `'10'` is a string.  
- `Number('10')` changes it to actual number `10`.  
- So `10 + 5 = 15`.

**Example:**
```javascript
Number('10') + 5; // 15
'10' + 5;         // "105" (because string + number = string)
```

---

## 🧑‍💻 **Practical Questions – Explained Simply**

### 1. **Count the number of characters in a string**

```javascript
function countCharacters(str) {
  return str.length;
}

console.log(countCharacters("Hello")); // Output: 5
```

**Explanation:**
- `length` counts **how many letters** are in the word.  
- `"Hello"` has 5 characters: H, e, l, l, o

---

### 2. **Generate a random number between 50 and 150**

```javascript
let randomNumber = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
console.log(randomNumber);
```

**Explanation:**
- `Math.random()` gives a random number between `0` and `1`.
- `Math.random() * 101` gives number between `0` and `100`.
- Adding `50` shifts it from `50 to 150`.
- `Math.floor()` removes the decimal part.

**Example:**
Could generate any number like:
```
62, 108, 149, 50, 150 (any whole number between 50 and 150)
```

---

### 3. **Replace 'banana' with 'orange' and remove last item**

```javascript
let fruits = ['apple', 'banana', 'cherry'];

fruits[1] = 'orange'; // Replace banana (index 1) with orange
fruits.pop();         // Remove the last item (cherry)

console.log(fruits); // ['apple', 'orange']
```

**Explanation:**
- Arrays have positions (called indexes):
  ```
  ['apple', 'banana', 'cherry']
     0        1         2
  ```
- So `fruits[1] = 'orange'` changes the second item.
- `pop()` removes the **last** item in the array.

### or solve dynamically
Sure! Here's a **brief and simple** explanation:

---

```javascript
let index = fruits.indexOf("banana"); // Finds where 'banana' is (index 1)
fruits[index] = "orange";             // Changes 'banana' to 'orange'
fruits.pop();                         // Removes the last item ('cherry')
console.log(fruits);                  // Shows: ['apple', 'orange']
```

✅ Final result: `['apple', 'orange']`
