# Exercise 4: Add some Style

**This exercise will make use of material in Topics 5 & 6**

If you got here before the check in - great job!  Consider taking a break, or looking ahead at [Topic 6](../lecture/topic-6-css-in-react.md)

---

Your `index.js` file is clean, and you've made several components.  However, the HTML in your browser is looking a little bland.  Time to add some css to make it stand out a bit more.

### **STEP 1** : make use of a css file

Make a css file in the src folder.  Don't forget to end the filename with the `.css` extension.

Import it in your `index.js` file.

[Having trouble with your import?](./hints/e4h1.md)

Any css rules you write in this file will be factored into the DOM representation.

Once you have imported your css file, try testing it out.

```css
	body {
		color: red;
	}
```

`color` is an inheritable css property. If we apply the above css, all of the `<body>`'s descendants will also have that declaration applied to them.  Verify that the text is red.  If it is, remove this rule and move onto Step 2.  If it isn't, go check the inspector tool; does the body have that css declaration being applied to it?  Is there an error in the console?

---

### **STEP 2** : make use of some colors

Google search something like: "color theme generator".  There are many great sites that have small collections of color hues that work well together.

Find a color palette you like.

Consider copying a the url into your css file and commenting it out.

Use those colors for your body's `backgound-color` and `color`.

Add a `border-bottom` to your `<header>`, and a `border-top` to your `<footer>`.

Looks like the default `margin` of the body is stopping the border from going accross the screen...

---

### **STEP 3** : add more css via className

Create at least one css rule that uses a class selector.

Add that class to an HTML element (make sure it causes some visual change).

Remember, in jsx, we add a class attribute to an HTML element with the attribute name "className" instead of the "class" that would be used in a vanilla HTML file. 

No specifics on how your page has to look.  Experiment with some css and define a few css classes.

Feel free to look up some effects: anything from css glow effects to gradients on your list elements.

---

Your page doesn't have to be aesthetically beautiful.  It can look like hot garbage.

The more you experiment with css, the more tools you'll have at your disposal in the future.

Here is Bimmy's web page:
![Bimmy's browser after exercise-4](./assets/e4a1.png)

With that, exercise-4 is complete 🎉