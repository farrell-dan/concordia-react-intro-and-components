# Exercise 6: Adding `<img>`s

**This exercise will make use of material in Topics 5 & 6 & topics not shown in the lecture.**

---

When you use an `<img>` element, you have to pass it both "alt" and "src" attributes.

In react, there are two distinct ways of providing a relative URL as a value to the "src" attribute.

By the end of this exercise, you're going to have practiced both of these.

Each method will be its own objective, with their own set of steps steps.

---

## **Objective 1**: Produce an `<img>` sourced from the public folder

In react, we have one HTML file that is being loaded from the /public folder.

That means that when you have an `<img>` element and you pass it a relative URL that looks like this:

```HTML
<img src="/fileName.jpg" alt="image description" />
```

react looks for a file called "fileName.jpg" in the /public folder to source this image element.

You can navigate deeper into folders, but you can't navigate upward outside the /public folder.

```HTML
<!--✅-->
<img src="/folder1/nestedFolder/fileName.jpg" alt="image description" />
<!--✅-->
```

```HTML
<!--🚫-->
<img src="../fileName.jpg" alt="image description that will display" />
<!--🚫-->
```

Fair warning, as of the writing of this lecture, vs code will not auto-fill the src string of an `<img>` in your jsx.  Hopefully this changes in a future update. 

---

### **STEP 1.1** : download an image

Please select an appropriate image ( no nudity, violence, etc )

Create an "assets" folder in your /public folder.

Save your image file into your "/public/assets" folder

---

### **STEP 1.2** : make a new component file

This is going to contain at least two `<img>` elements.

For now, just make it return a `<section>`

If you need help, consider reviewing [Exercise 3:](./workshop/exercise-3.md)

---

### **STEP 1.3** : render your new component somewhere in your `<main>`

Once you complete this step, you shouldn't see a difference in what is painted in your DOM.

Check your browser's element inspector to find your empty section.  Or add in some temporary text.

---

### **STEP 1.4** : add an `<img>` element into your new `<section>`

This is where you'll have to provide a "src" attribute that points to the file you put in the "/public/assets" folder.

Remember to include the extension after the file name.

Spelling mistakes are a common gotcha when you're denied auto fill, so consider copy-pasting the file name.

If you see your image in the browser, excellent work!  If you don't, keep trying.  Try googling for help, but see your instructors in the queue if it is taking a while.  Another set of eyes may quickly spot something you're passing over as correct.

---

### **STEP 1.5** : add style to your new `<img>` (optional)

Depending on the natural px count of your image file, you may want to add some styling to your new element to keep it a respectable size relative to your text.

Feel free to use more css properties to place it where you like.

---
---

## **Objective 2**: Produce an `<img>` sourced from a file import

All of your react functional component files will be somewhere in the /src folder.

Any file within the /src folder can be imported in a component file.  This includes images.

Attempting to import a file outside of the /src folder will result in the following error:

```
Module not found: Error: You attempted to import ../someFileName.extension which falls outside of the project src/ directory. Relative imports outside of src/ are not supported.
```

Remember that when you import the default export of a file, you can store that into any legal variable name you like.

When you import an image file, react stores a relative path to that image that will work after the react environment is bundled into a /static folder.  You can get a feel for this by looking at the `Sources` tab in Chrome's developer tools.

You may find this confusing, but don't worry. Practically, know that you can pass this import to an `<img>`'s "src" attribute and the image will load.

Fair warning again, vs code's auto-fill isn't likely to be of much help writing out the file name (though it will work with folder navigation).

---

### **STEP 2.1** : download an image

It can be the same image if you like.

Place it in the /src folder.

---

### **STEP 2.2** : import the image file

Open the same component you rendered the `<img>` element from **Objective 1**.

`import` the path to the image you saved in STEP 1.1

This isn't like importing a css file, you will need to name this variable.

Test this with a `console.log`.  You should see something like this:

```
/static/media/yourFileName.6cb80295b73654dbe5ad.jpg
```

---

### **STEP 2.3** : add a new `<img>` element beside your first one

Create another `<img>` element beside your first.

Pass it the path you just imported.  You will literally need to pass it the variable, which means opening up a jsx expression slot using curly braces ` { } `

You should see the image in the browser.

---

### **STEP 2.4** : add style to your new `<img>` (optional)

Same as in STEP 1.5.

---

You should now see two glorious images in your browser.

Feel free to add more images, just make sure to include at least one case of an import and one case of a path through /public/assets

Here is Bimmy's final web page:
![Bimmy's browser after exercise-6](./assets/e6a1.png)

With that, exercise-6 is complete 🎉