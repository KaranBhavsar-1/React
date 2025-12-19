# React Hooks – Simple Notes

These notes are for quick revision and easy understanding of common React hooks.

---

## 🔹 useState

**Used to store and change data in a component**

Think of it as a **variable that can change and update the screen**.

### Example

```js
const [count, setCount] = useState(0);
```

* `count` → current value
* `setCount` → function to change the value

When the value changes, **React re-renders the UI**.

---

## 🔹 useEffect

**Used to run code when something changes or when the component loads**

Think of it as **"do something when…"**

### Example

```js
useEffect(() => {
  console.log("Component loaded or count changed");
}, [count]);
```

Runs:

* When the component loads
* Again when `count` changes

### Common uses

* API calls
* Database updates
* Event listeners

---

## 🔹 useRef

**Used to store a value without re-rendering the component**

Think of it as a **box that remembers a value but doesn’t refresh the screen**.

### Example

```js
const inputRef = useRef();
```

Used for:

* Accessing DOM elements (input, button, etc.)
* Storing values that should not cause re-render

Example:

```js
inputRef.current.focus();
```

---

## 🔹 useCallback

**Used to remember a function so it doesn’t get recreated again and again**

Think of it as **saving a function for better performance**.

### Example

```js
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

Used when:

* Passing functions to child components
* Avoiding unnecessary re-renders

---

## ⭐ Other Important React Hooks

### 🔹 useMemo

**Used to remember a calculated value**

Think of it as **saving the result of a heavy calculation** so it doesn’t run again.

```js
const result = useMemo(() => heavyCalculation(num), [num]);
```

Used when:

* Calculations are expensive
* To improve performance

---

### 🔹 useContext

**Used to share data without passing props**

Think of it as **global data access**.

```js
const user = useContext(UserContext);
```

Used for:

* Theme (dark / light)
* User authentication
* Language settings

---

### 🔹 useReducer

**Alternative to useState for complex logic**

Think of it as **state + rules**.

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

Used when:

* State logic is complex
* Many related state updates

---

### 🔹 useLayoutEffect

**Like useEffect but runs earlier (before paint)**

Used when:

* Measuring DOM size
* Layout calculations

---

### 🔹 useImperativeHandle

**Controls what a parent component can access from a child**

Used with `forwardRef`.

---

### 🔹 useDebugValue

**Used for debugging custom hooks**

Shows values in React DevTools.

---

## 🧠 React 18+ Hooks

### 🔹 useId

**Generates unique IDs**

Used for:

* Accessibility
* Form labels

---

### 🔹 useTransition

**Marks updates as non-urgent**

Improves UI responsiveness.

---

### 🔹 useDeferredValue

**Delays updating a value**

Used for:

* Search inputs
* Slow rendering lists

---

## 🧩 Custom Hooks

You can create your own hooks by combining others.

```js
function useCounter() {
  const [count, setCount] = useState(0);
  return { count, setCount };
}
```

---

## 🧠 One-line Summary

* `useState` → store changing data
* `useEffect` → run code when something changes
* `useRef` → store value without re-render
* `useCallback` → remember a function
* `useMemo` → remember a value
* `useContext` → share data globally
* `useReducer` → manage complex state

---

✅ Complete React Hooks revision notes
