# React + Vite + Tailwind Starter Guide

## 🚀 Create a React App

### Using Create React App

``` bash
npx create-react-app 01basicreact
```

### Run the App

``` bash
npm run start
```

### Build the App

``` bash
npm run build
```

------------------------------------------------------------------------

## ⚡ Best Method: Vite

``` bash
npm create vite@latest
```

Follow the prompts to select **React** + **JavaScript** or **React** +
**TypeScript**.

------------------------------------------------------------------------

## 🌀 Push Code to GitHub

``` bash
git add .
git commit -m "YOUR MESSAGE"
git push -u
```

------------------------------------------------------------------------

## 🎨 TailwindCSS Setup with Vite

### 1. Create Vite Project

``` bash
npm create vite@latest my-project
cd my-project
```

### 2. Install Tailwind

``` bash
npm install -D tailwindcss postcss autoprefixer
npm install -D tailwindcss@3.4.17
npx tailwindcss init -p
```

### 3. Add Tailwind Directives

In `index.css`:

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Configure Tailwind

Edit `tailwind.config.js`:

``` js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

------------------------------------------------------------------------

## ✅ You're Ready to Build!

This setup is clean, fast, and perfect for modern React development.
