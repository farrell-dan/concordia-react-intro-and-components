---
marp: true
---

# css in react

---

## css in react

- There are several ways to add css in react

- Today we're going to see two

1. inline styling

2. css file(s)

---

## 1. Inline styling

- Inline stlying happens in the opening tag of an element

- Attribute name is "style"

- In HTML, the value is a string that has css syntax

HTML:
```html
	<p style="color:red;font-size:2em;">
```
---

## Inline styling in JSX

- Inline stlying happens in the opening tag of an element

- Attribute name is "style"

- In JSX, the value is an object!!

JSX:
```jsx
	<p style={ { color: "red" , fontSize: "2em" } }>
```

- css properties lose their dashes "-" and become camelCased

- An equivalent way of providing this object is to create it before the return

```js
const Component = () => {
	const myStyleObject = { color: "red" , fontSize: "2em" }
	
	return <p style={ myStyleObject }> Hello World (but red) </p>
}
```

---

## JSX Inline styling examples

```js
const Component = () => {

	const myStyleObject = {
		color: "red",
		fontSize: "2em"
	};
	
	return (
		<p style={ myStyleObject }>
			Hello World (but red)
		</p>
	)
}
```

---

## JSX Inline styling examples

```js
const Component = () => {

	const color = "purple"

	const myStyleObject = {
		color,
		fontSize: "2em"
	};
	
	return (
		<p style={ myStyleObject }>
			Hello World (but {color})
		</p>
	)
}
```

---

## 2. css file(s)

- You can also style your components with css rules in a css file

- This css file is structured the same as in a vanilla environment

```css
/* in file styles.css */

body {
	margin: 0;
}

button {
	font-size: 2em;
	padding: .25em;
	background-color: lightblue;
}

button:hover {
	cursor: pointer;
	background-color: lightgreen;
}

.centered {
	display: flex;
	justify-content: center;
	align-items: center;
}

```

---

## Linking the css file

- You can link this the usual way in an HTML file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
		<link rel="stylesheet" href="%PUBLIC_URL%/styles.css">
  </head>
  <body>
		<div id="root"></div>
	</body>
</html>
```

- css file has to be in the `/public` folder

---

## Linking the css file

- You can also import the css file in a js file

```js
import ReactDOM from 'react-dom/client';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<button className="special-button">Hello World</button>);
```

- css file has to be in the `/src` folder

---

## linking the css file

- You can also import a css file in a Component file

- In fact, you could have a css file for each component

- This is one way to have each component compartmentalized

- If you use multiple css files, be careful to use unique `className`s

- However, for smaller applications, one css file works well



---

## Which css method is best?

- Obviously, this is a matter of opinion

- It is nice to have a self contained component

- That way you only need to look at one file to understand what it renders

- On the other hand, you don't want super cluttered JSX

- Inline styles can take a lot of space, so classes are usually cleaner

---

## Which css method is best?

- We will show you another method in the future

- For now use a combination:

- One css file (your apps are small)

- And inline styles for variable styling

---

## End of today's topics