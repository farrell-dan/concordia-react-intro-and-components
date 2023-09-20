# Exercise 1: Get react running in your browser

**This exercise will make use of what you saw in Lecture Topic 2.**

---

Someone started building a react application, but didn't quite get there.

You're going to complete it!

Take a peak at the `package.json` that you have been provided...

```json
{
  "name": "react-intro-and-components",
  "version": "1.0.0",
  "main": "index.js",
  ...
  "scripts": {
    "start": "react-scripts start"
  },
  "dependencies": {
    "react-dom": "^18.2.0"
  }
}
```

Dependencies!  If you clone a repo, and it has anything in its dependancies field, it's extremely likely you're going to have to install them.  You know the drill...

### **STEP 1** : execute `yarn install` in your terminal.

[Having trouble?](./hints/e1h1.md)

---

Looking back at that `package.json`, there is a `start` script.  Let's run that it with `yarn start`.

Hmm, looks like we got a `react-scripts: command not found` error.  Seems the react-scripts **module** isn't in our list of dependancies!

### **STEP 2** : add "react-scripts" to our list of dependancies

Note: You shouldn't be manually changing the dependancies in the package.json.  Instead, you should be modifying them with terminal commands.

Adding this dependancy should take a while (20-60s) because it will also download and install all its peer dependancies.

---

Try `yarn start` again...

`Cannot find module 'react'` ?

### **STEP 3** : add the final missing dependancy

---

`yarn start` yet again...

Answer "y" to let the script add a "browserslist" field to the `package.json` and proceed.

Aha!  You've got it running in the browser...  Well do you?  Check out the `index.js` file in the src folder.

Shouldn't you be seeing "Hello World" in the browser?  It seems like nothing is wrong in the terminal.

There are essentially two places to look for errors:
1. The terminal
2. The browser's console

### **STEP 4** : fix the "Error: createRoot(...): Target container is not a DOM element." error

The `createRoot` method expects a DOM element, but it didn't get one.

What argument was it passed?  What is missing?

[Having trouble?](./hints/e1h2.md)

---

Once you have fixed this final error, you should see "Hello World" in the browser and the console should be clear of errors (it may take a refresh of the browser to remove it).

With that, exercise-1 is complete 🎉 