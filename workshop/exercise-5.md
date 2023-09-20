# Exercise 5: Add some randomized style

**This exercise will make use of material in Topics 5 & 6**

---

In a file that defines a react functional component, the return of a component is jsx.  In that return, you cannot make javaScript statements as you usually can in a javaScript file.  Outside of that return, you can declare variables, execute other functions, etc.

```js

console.log("This file is loading");

const sentences = [
	"Hello World.",
	"Patience is a key element of success.",
	"There is no unique picture of reality."
	]

const SomeComponent = () => {
	const selectedSentence = sentences[1];

	// js as usual above this point, jsx until the next comment
	return (
		<p>{selectedSentence}</p>
	)
	// jsx above this point, js as usual below this point 
}

console.log("This file has loaded");

export default SomeComponent
```

Your objective for exercise-5 is to make a sentence in the browser appear in a random color.
So everytime you refresh the page, the color should be selected again (and will likely be different).

---

### **STEP 1** : pick a sentence

Literally look at your browser and choose which sentence you want to color.

Find the file that contains that sentence, and open it.

---

### **STEP 2** : create an array of colors in that file

Declare a variable that points to an array.

Each element in that array must be a string.

Each string must contain a valid css color.

Add at least 4 colors.

Since this array will always be the same, ideally you should declare it above the definition of a component and not inside it.

`console.log` that array in the file.  Make sure you can see it in the browser.

Any valid form of a color will work.  This includes names, Hexadecimal, HSL, RBG, etc.  For now, stick with named color values as they are the easiest for us humans to understand.

Here are a couple of web sites you can use to see a list of valid color names:

- [rapidtables' list](https://www.rapidtables.com/web/css/css-color.html)
- [w3.org's list](https://www.w3.org/wiki/CSS/Properties/color/keywords)

---

### **STEP 3** : select a random color from your array

When you want to select a random element from an array, you need to generate a random integer between 0 and the highest index number.  The highest index number available from an array is 1 less than its length.

For ex:
```js
const myNumbers = [0, 42, Math.PI, Infinity, 100]
```
is a list that contains 5 numbers.  So the valid index range is 0 to 4.

`Math.random()` produces a random number from 0 to .9999999999999999

To turn this into a valid index range, we need to multiply a random number by the length of the array and then round this number down.

Create a variable that is equal to a random valid index.
Create another variable the combines your array of colors and a random index.

`console.log` your random color and go check your browser's console.  Refresh the page a few times; you should see the logged color change on most refreshes.

---

### **STEP 4** : create an object called "colorStyle"

Create another variable that contains an object.

This object should have one key: "color", whose value is the color you just generated.

As always, you're free to use `console.log` to get feedback from your code.  Just remember to delete your log executions once you're done testing.

---

### **STEP 5** : inject your color via the style attribute

In vanilla HTML files, we can inject inline styles like so:
```html
<!-- 🚫 does not work in jsx-->

<div style="display:flex; justify-content:center; align-items:center">
	<p>Some content</p>
</div>

<!-- 🚫 does not work in jsx-->
```

However this looks different in jsx:

```js
const Component = () => {
	return (
	<div style={ { display: "flex", justifyContent: "center", alignItems: "center" } }>
		<p>Some content</p>
	</div>
	)
}
```

The differences:
- The value of style is an object instead of a string
- To pass "style" an object we need to open up a jsx slot for an expression using curly brackets ` { } `
- Hyphens ` - ` are removed, and property names instead use camelCase
- Since style expects an object, the value of each key must be a string.
- Since style expects an object, each key value pairing is separated by a comma.

Use your `colorStyle` variable to randomly color the text of the sentence you selected in Step 1.

---

You should see the text of this element painted in a random color.  Refresh the browser a couple of times to make sure it is working.  If it isn't coloring, check your console for errors.  Use the inspector tool to see what css that sentence does have...

With that, exercise-5 is complete 🎉