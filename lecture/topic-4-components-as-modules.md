---
marp: true
---

# Components as Modules

---

- We can build components...

- But what is `export default`?

- How do we use components?

---

## The wrong way

- Each component is in its own file

- How do these files communicate with each other?

- In a vanilla HTML and js environment, we would embed js files with a `<script>` element:

```html
<!DOCTYPE html>

<html>

  <body>
    <h1>Imagine this has more content</h1>
		<script src="scripts.js"></script>
		<script
			type="module"
			src="exported-scripts-not-a-react-solution.js"
		></script>
  </body>
	
</html>
```

- This is not how we access the components we build

---

## Modules

- A `<script>` of type="module" becomes a ES module

- This means it can export any variables in that file

- Exporting is like letting your neighbors use some tools from your shed

- There are two types of exporting, for now, we will focus on the default export

- Each module can have exactly **ONE** default export

---

## Components as modules

- In react, component files are treated as ES modules

- This means they can export the function defined in them

- It also means they can import whatever was exported in another file

---

## How to export

- We saw this at the end of last topic:

```jsx

const Component = () => {
	return <p>My very simple component</p>
}

export default Component

```

- For the sake of consistency, keep the export default as the final line in any component file

---

## How to make use of an export

- In order for component-1 to use component-2, component-1 must **import** component-2

```jsx
// in file Component.js

const Component = () => {
	return <p>A very simple component</p>
}
export default Component
```

```jsx
// in file BiggerComponent.js

import Component from "./Component.js";

console.log(Component)

const BiggerComponent = () => {
	return (
		<div>
			<h1> What will I render? </h1>
		</div>
	)
}
export default BiggerComponent

```

- The `console.log` in the BiggerComponent file will log the definition the Component function from the Component.js file

- Note: the import or imports have to be at the top of the file

---

## How to execute a component

- A component is a function!!!

- Normally we execute functions by adding parentheses after it

- Not in react!

- Remember that a component returns JSX - which will produce some HTML

- In JSX you create elements by simply adding `<div>`

- To execute a component imported as "ComponentName":

- In the JSX you add `<ComponentName/>`

---

## How to execute a component

```jsx
// in file Component.js

const Component = () => {
	return <p>A very simple component</p>
}
export default Component
```
```jsx
// in file BiggerComponent.js

import Component from "./Component.js";

const BiggerComponent = () => {
	return (
		<div>
			<h1> A component in a component? </h1>
			<Component/>
		</div>
	)
}
export default BiggerComponent

```

---

## How to execute a component

- Note that casing is of extreme importance here!

- If you use lower casing, then JSX interprets it as a vanilla HTML element

```jsx
import Component from "./Component.js";

const BiggerComponent = () => {
	return (
		<div>
			<h1> A component in a component? </h1>
			<Component> </Component>
			<component> </component>
		</div>
	)
}
export default BiggerComponent

```

- The first `Component` is the imported react functional component
- The second `component` is an HTML element `<component>`
- There is no `<component>` element (yet...)
- The browser treats this as a custom inline element with no default styling
- Not very useful...
- It's also invalid HTML with no semantic value

---

## An ecosystem of components

- Components execute components!

```jsx
// Component imports
import Navbar from "./Navbar";
import Home from "./Home";
import Feed from "./Feed";
import Footer from "./Footer";

const App = () => {

	return (
		<div>
			<Navbar />
			<Home />
			<Feed />
			<Footer />
		</div>
	)
}

export default App;
```

---

## Where does it start

- A logical question is if components execute components...

- Where does this process begin?

- The answer is the `render` method

---

## The first place you can execute a component

```js
// src/index.js

import ReactDOM from 'react-dom/client';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <App/> );
```

- It is common to have a component called `App`

- This component is the largest component

- It pretty much contains everything

---

The next topic will be covered at the check in

[topic-5-jsx](./topic-5-jsx.md)