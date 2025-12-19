# React Router DOM – Core Concepts (Revision Notes)

Short but detailed explanations with examples for quick revision.

---

## 1️⃣ Route

**Defines a path and which component should render**

Think of it as **URL → Component mapping**.

### Example

```js
<Route path="/about" element={<About />} />
```

Used to:

* Match URLs
* Render specific components

---

## 2️⃣ RouterProvider

**Connects the router to the React app**

Think of it as **activating routing in your app**.

### Example

```js
import { RouterProvider } from "react-router-dom";

<RouterProvider router={router} />
```

Without this, routing will not work.

---

## 3️⃣ createBrowserRouter

**Creates a router using browser history**

Think of it as the **route configuration of the app**.

### Example

```js
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> }
]);
```

Used for:

* Modern React Router setup
* URL-based navigation

---

## 4️⃣ createRoutesFromElements

**Creates routes using JSX instead of objects**

Think of it as **writing routes like components**.

### Example

```js
import { createRoutesFromElements, Route } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);
```

Used when:

* Nested routes
* Layout components

---

## 5️⃣ Outlet

**Renders child routes inside a parent layout**

Think of it as a **placeholder for nested pages**.

### Example

```js
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
```

Used for:

* Navbar / Sidebar layouts
* Common UI structure

---

## 6️⃣ Link

**Used to navigate without reloading the page**

Think of it as **React version of `<a>` tag**.

### Example

```js
import { Link } from "react-router-dom";

<Link to="/about">About</Link>
```

Used for:

* Page navigation
* SPA routing

---

## 7️⃣ NavLink

**Same as Link but with active styling**

Think of it as **Link + active state**.

### Example

```js
import { NavLink } from "react-router-dom";

<NavLink
  to="/about"
  className={({ isActive }) => isActive ? "active" : ""}
>
  About
</NavLink>
```

Used for:

* Navigation menus
* Highlight active page

---

## 8️⃣ useLoaderData

**Gets data returned by a route loader**

Think of it as **fetching data before page loads**.

### Loader Example

```js
export const userLoader = async () => {
  return fetch("https://api.example.com/users");
};
```

### Route

```js
<Route path="/users" element={<Users />} loader={userLoader} />
```

### Component

```js
import { useLoaderData } from "react-router-dom";

function Users() {
  const users = useLoaderData();
  return <div>{users.length}</div>;
}
```

---

## 9️⃣ useParams

**Reads dynamic values from the URL**

Think of it as **getting variables from route path**.

### Route Example

```js
<Route path="/product/:id" element={<Product />} />
```

### Component Example

```js
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  return <h1>Product ID: {id}</h1>;
}
```

Used for:

* Product pages
* User profiles

---

## 🧠 One-line Summary

* `Route` → URL to component mapping
* `RouterProvider` → enables routing
* `createBrowserRouter` → route configuration
* `createRoutesFromElements` → JSX-based routes
* `Outlet` → nested route placeholder
* `Link` → navigation without reload
* `NavLink` → navigation with active style
* `useLoaderData` → preloaded route data
* `useParams` → read URL parameters

---

✅ React Router DOM complete revision notes
