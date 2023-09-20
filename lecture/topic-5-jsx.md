---
marp: true
---

# JSX

---

## JSX

- Functional components return JSX

- JSX was created by Meta/Facebook

- JSX can look very similar to HTML

```jsx

const ExampleComponent = () => {

	// the return contains JSX
	return (
		<ul>
			<li> I </li>
			<li> look </li>
			<li> like </li>
			<li> HTML </li>
		</ul>
	)
}
```

---

## JSX is dynamic

- One amazing feature of JSX are **expression slots**

- If you open curly brackets / braces `{ }` in JSX

- Inside the braces is an **expression slot**

- In this slot you can place a javaScript **expression**

- This lets you place variables or even call functions inside *"HTML"*

---

## JSX is dynamic

```jsx
// in file CircleComponent.js

const pi = 3.14;
// forgive the rounding

const CircleComponent = () => {
	const radius = 10;
	const area = pi * radius * radius;

	return (
		<p>
			A circle of radius { radius }m has an area of { area }m²
		</p>
	)
}

```

- In the DOM, this will produce:

```html
<p>A circle of radius 10m has an area of 314m²</p>
```

- ( very close to this anyway )

---

- The next few slides contain react environments in a lecture

- Ignore the final line in the script

- It only exists to execute the component

- You will not include this `render` execution in your component files

- In vs code, all but one component will be executed in the JSX of other components 

---

- Additional note that these live demos do not work in regular md files

- So these will not be functional from this medium.

---

## JSX is dynamic examples

- variables are expressions

```jsx

const pi = 3.14;
// forgive the rounding

const CircleComponent = () => {
	const radius = 10;
	const area = pi * radius * radius;

	return (
		<p>
			A circle of radius { radius }m has an area of { area }m²
		</p>
	)
}
```

---

## JSX is dynamic examples

- mathematical operations are expressions

```jsx

const pi = 3.14;
// forgive the rounding

const CircleComponent = () => {
	const radius = 10;

	return (
		<p>
			A circle of radius { radius }m has an area of { pi * radius * radius }m²
		</p>
	)
}
```

---

## JSX is dynamic examples

- function executions are expressions

```jsx

const calcArea = r => Math.PI * r * r;

const CircleComponent = () => {
	const radius = 10;
	
	return (
		<p>
			A circle of radius { radius }m has an area of { calcArea(radius) }m²
		</p>
	)
}
```

---

## JSX is dynamic examples

- It's hard to overstate how powerful this is

```jsx
const User = () => {
	const userInfo = {
		name: "Andrew",
		location: "Earth",
		"favorite language": "javaScript"
	};

	return (
		<div>
			<p>Hi, my name is {userInfo.name}!</p>
			<p>I live on {userInfo.location}</p>
			<p>My favorite language is {userInfo["favorite language"]}</p>
		</div>
	)
}

```

---

## JSX attribute names

- JSX uses slightly different attribute names than HTML

- Here are some opening tags as examples

HTML:
```html
<form onsubmit="handleSubmit()">
<button onclick="handleClick()">
<select onchange="handleChange()">
<div onmouseenter="handleMouseEnter()">
```

JSX:
```jsx
<form onSubmit={handleSubmit}>
<button onClick={handleClick}>
<select onChange={handleChange}>
<div onMouseEnter={handleMouseEnter}>
```

- In general, the attribute name gets camelCased

- You pass a function definition in an expression slot as the value

---

## JSX attribute names example

```jsx
const Example = () => {

	const handleClick = () => {
		console.log("Yes, the button was clicked!")
	}

	return (
		<button onClick={handleClick}>
			Test
		</button>
	)
}
```

---

## JSX attribute names

- Some HTML attribute names are one word...

HTML:
```html
<main id="main-container">
<p class="red-text">
<label for="email">
<button disabled> || <button disabled="true">
```

JSX:
```jsx
<main id="main-container">
<p className="red-text">
<label htmlFor="email">
<button disabled={true}>
```

- These are the exceptions

- Consider googling them as you encounter them

---

## JSX attribute names example

```jsx
const Example = () => {

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log("Form submission!")
	}

	return (
		<form onSubmit={handleSubmit}>
			<button type="submit" disabled={true}>
				Submit Disabled
			</button>
		</form>
	)
}
```

---

- "className"?

- How do we handle css?

[topic-6-css-in-react](./topic-6-css-in-react)