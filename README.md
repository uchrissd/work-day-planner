# work-day-planner

**Motivation**

This is a day planner that allows for a user to save their schedule by the hour based on a 9-5 work day. In addition, the planner is color code based on the time of day. So, events in the past are blue, the current hour is red, and events in the future are colored green. Events that the user saved are stored to local storage and can be overwritten whenever the user wants.

**Build status**

The application is not totally finished. I wasn't able to figure out how to display the saved events in the input field after a user refreshes their browser. Also, there were issues with the css style sheet not properly linking with the HTML document. In the end, I added a style section directly o the HTML document.

**Code style**
The application is written in JavaScript using the jQuery library for accessing the DOM api.

**Screenshots**

Here are screenshots of the application.

_Desktop version_

![Day planner screenshot](assets/images/desktop-screen-shot.jpg)

_Mobile version_

![Day planner screenshot](assets/images/mobile-screen-shot.jpg)

**Code Example**

```javascript
//This function takes in and displays the local date and time in real-time using moment.js
function realTime() {
  var dateTime = moment().format("LLLL");
  console.log(dateTime);
  $("#currentDay").append(dateTime);
}
realTime();
console.log(realTime);

//Global variable for parsing userArray from local storage into an array of accesible objects
var storageVariable = localStorage.getItem("userArray");
storageVariable = JSON.parse(storageVariable);

if (!storageVariable) {
  storageVariable = [];
}

//Variable for the current hour in military time
var currentTime = moment().format("H");
console.log(currentTime);
```

**Installation**

# No installation necessary. Project is hosted here: https://uchrissd.github.io/work-day-planner/

## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/uchrissd/work-day-planner/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1

## Header 2

### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/uchrissd/work-day-planner/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.

> > > > > > > 8b0e61c1b319cb3e39d5b434f13ceb1b79849126
