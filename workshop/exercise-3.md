# Exercise 3: Make Components

**This exercise will make use of what you saw in Topics 3 & 4**

---

Your `index.js` file in the src folder is beginning to look pretty cluttered.

One of the great features of react is its ability to make use of components that produce jsx.

In react we make use of components, primarily, for three reasons:
- It helps organize our code
- It prevents the repetition of code (components are functions)
- functions can accept arguments... more on this next class

The `<div>` we are rendering should have three children:
1. `<header>`
2. `<main>`
3. `<footer>`

### **STEP 1** : make components out of each of the `<div>`'s children

For each of the above three elements, you'll have to make a new component.

Follow the following steps to create a new component:

__1.1__ **Make a new file.**

You can name it whatever you want, but component files should use PascalCase and, ideally, have the same name as the function they will export.  Don't forget to add the `.js` extension at the end of the file name!

__1.2__ **Declare a function in that file.**

Again, use PascalCasing.  We recommend avoiding functions with implicit returns.  Instead use explicit returns:

```js
// 🚫 Avoid implicit returns (for now at least)
	const PotentiallyConfusingComponent = () => <header><h1>This is a Header</h1></header>
// 🚫

// ✅ Opt for explicit returns
	const Header = () => {

		return (
			<header>
				<h1>This Header is Lit</h1>
			</header>
		)
	}
// ✅
```

__1.3__ **Cut the HTML into your function's return.**

Look to the jsx you want to convert into a component.  Cut that jsx out of the place it currently resides and paste it into the return of the new component.

If you want to be careful, instead of cutting the jsx, you can copy paste, and leave it in two places.

__1.4__ **Export the function.**

The final line of a component file should be the exporting of that component.  Technically, the export can happen anywhere after the function declaration, but as component files get more complicated, it will be nice to have a consistent place to find the file's default export.

Your component should look something like this:
```js
	const Component = () => {
		return <p>I am a component</p>
	}
	export default Component
```

__1.5__ **Import and render your new component.**

In your `index.js` file, import the new component you just completed.
Inside the `render` method, replace the portion of the jsx with the execution of the component you imported.

[Having trouble?](./hints/e3h1.md)

Repeat this process for each of the `<div>`'s children.

Once you are done, your `render` method should look like this:

```js
root.render(
  <div>
    <Header/>
    <Main/>
    <Footer/>
  </div>
);
```

So much cleaner!

---

### **STEP 2** : make a component for each of `<main>`'s children

This is very similar to Step 1:

The `<main>` should have three children. Each should be a `<section>`

When making components out of each of those `<section>`s, you can name them numerically, but it is better practice to name components based on what they contain.

Once you are done, your `Main.js` (your file's name may differ) should look something like this:

```js
import BestGames from "./BestGames";
import CoolQuote from "./CoolQuote";
import TodaysTODOs from "./TodaysTODOs";

const Main = () => {
  return (
    <main>
      <BestGames />
      <TodaysTODOs />
      <CoolQuote />
    </main>
  );
};

export default Main;
```

---

At this point, you should have made six new components.  This means there should be seven javaScript files in your src folder (the six you made plus the original `index.js` file)

With that, exercise-3 is complete 🎉