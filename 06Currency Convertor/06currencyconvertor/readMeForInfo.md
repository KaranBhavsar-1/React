

# Currency Converter (React + Vite)

A simple and clean currency converter made using **React**, **Vite**, and a free currency API. It allows users to enter an amount, choose currencies, and instantly convert between them.

---

## 🚀 Features

* Convert any currency to another using live rates
* Swap currencies instantly
* Clean UI with Tailwind CSS
* Custom hook for API fetching (`useCurrencyInfo`)
* Reusable component (`InputBox`)

---

## 📁 Project Structure

```
src/
│
├── App.jsx               → Main app logic
├── main.jsx              → React entry point
├── index.css             → Global styles
│
├── components/
│     └── InputBox.jsx    → Reusable input + select UI
│
├── hooks/
      └── useCurrencyInfo.jsx → Custom API hook
```

---

## 🧠 How the App Works (Simple Explanation)

### 1. **App.jsx** (Main Logic)

* Stores and manages all the state: `amount`, `from`, `to`, `convertedAmount`.
* Calls the custom hook `useCurrencyInfo(from)` to fetch conversion rates.
* Creates a list of currencies using `Object.keys()` from the API result.
* Handles two main actions:

  * **Convert:** multiply amount × rate
  * **Swap:** exchange `from` and `to` values
* Uses two `InputBox` components for FROM and TO fields.

---

### 2. **InputBox.jsx** (Reusable Component)

* Accepts props like label, amount, currency list, and event handlers.
* Shows input field + currency dropdown.
* Can disable input (used for the "To" box).

---

### 3. **useCurrencyInfo.jsx** (Custom Hook)

* Fetches rates based on the selected base currency.
* Returns currency data like:

```
{
  "inr": 83.12,
  "eur": 0.92,
  "gbp": 0.78,
  ...
}
```

* Updates automatically when `currency` changes.

---

## 🔄 Data Flow (Very Simple)

```
User enters amount → App stores it → convert() calculates → InputBox shows it
```

```
User changes currency → custom hook fetches new rates → app updates options
```

---

## 🛠️ How to Recreate This Project

### 1️⃣ Create Vite Project

```
npm create vite@latest currency-converter --template react
cd currency-converter
npm install
```

### 2️⃣ Install Tailwind CSS

Follow the Tailwind React + Vite setup:

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add to `tailwind.config.js`:

```
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

Update `index.css`:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3️⃣ Create Files

* `App.jsx`
* `components/InputBox.jsx`
* `hooks/useCurrencyInfo.jsx`

### 4️⃣ Run the Project

```
npm run dev
```

---

## 🌐 API Used

Free currency API:

```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json
```

Example:

```
usd.json → gives all rates compared to USD
```

---

## 📌 Tips

* Always check if API returned data before using it
* Use `Object.keys(currencyInfo || {})` to avoid errors
* Keep components small and reusable

---

## 👍 Final Result

You now have a full currency converter with:

* React state management
* Custom hook
* Reusable components
* API integration
* Tailwind styling

This README helps anyone understand and rebuild the project easily.
