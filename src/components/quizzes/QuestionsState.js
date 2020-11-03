export function getQuestions(){
  return [
    {
      category: "Javascript",
      question: "Which of the following methods allow you to add an element to myArray at the end?",
      options: [
        "myArray.pop(element)",
        "myArray.shift(element)",
        "myArray.unshift(element)",
        "myArray.push(element)"
      ],
      correctAnswer: 3,
      hint: "Only push and unshift methods allow you to add items, one at the first position and the other at last.",
      answerExplanation: "The push() method adds new items to the end of an array, and returns the new length."
    },
    {
      category: "Javascript",
      question: "How do you log the value of a variable myName to the console?",
      options: [
        "myName.consoleLog()",
        "myName.log()",
        "console.log(myName)",
        "consoleLog(myName.value)"
      ],
      correctAnswer: 2,
      hint: "There is an object console in JS that has a lot of functions you can use!",
      answerExplanation: "The console.log() method allows you to log into the console whatever you put as a parameter."
    },
    {
      category: "Javascript",
      question: "How do you access the property 'loved languages' from the object aDeveloper?",
      options: [
        "aDeveloper.lovedlanguages",
        "aDeveloper.lovedLanguages",
        "aDeveloper['loved languages']",
        "aDeveloper[loved languages]"
      ],
      correctAnswer: 2,
      hint: "JS can´t handle whitespaces for you with the dot notation for accessing properties.",
      answerExplanation: "The correct way to access properties with a space in its name is using the bracket notation with the property name as a string."
    },
    {
      category: "Javascript",
      question: "How do you remove the property 'boringTask' from the object myself?",
      options: [
        "delete boringTask from myself",
        "delete myself.boringTask",
        "myself.boringTask delete",
        "delete(boringTask)"
      ],
      correctAnswer: 1,
      hint: "The operator delete can be used on objects to remove properties from them.",
      answerExplanation: "The way to remove a property from an object is with the delete operator followed by the object.property you want to remove."
    },
    {
      category: "Javascript",
      question: "Which option creates a new array that results from applying 'someFunction' to each element?",
      options: [
        "myArray.map(someFunction)",
        "myArray.filter(someFunction)",
        "myArray.every(someFunction)",
        "myArray.find(someFunction)"
      ],
      correctAnswer: 0,
      hint: "We are not looking for items that are true for a predicate, rather to transform each item into something else.",
      answerExplanation: "The array method that allows us to transform each element into something different is map, it returns a new array with the mapping of each element after applying the parameter function."
    },
    {
      category: "HTML",
      question: "Which tag is used for further describing the surrounding content? (indirectly related)",
      options: [
        "<article>",
        "<footer>",
        "<aside>",
        "<indirect>"
      ],
      correctAnswer: 2,
      hint: "The correct tag is usually used for a sidebar in a document.",
      answerExplanation: "The tag <aside> represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes."
    },
    {
      category: "HTML",
      question: "Where should the <title> tag be written?",
      options: [
        "Inside the <head>",
        "Inside the <body>",
        "Inside the <header>",
        "None of the above."
      ],
      correctAnswer: 0,
      hint: "The correct answer is a tag that can only be written once in an HTML document and is usually at the top.",
      answerExplanation: "The <head> element is a container for metadata (data about data), it contains between several things the <title> (which is required in every HTML document)."
    },
    {
      category: "HTML",
      question: "What is the difference between the tags <ul> and <ol>?",
      options: [
        "unit list, other lists",
        "universal list, ordered list",
        "unordered list, outstanding list",
        "unordered list, ordered list"
      ],
      correctAnswer: 3,
      hint: "The correct pair answer has to do with order.",
      answerExplanation: "The tags <ul> and <ol> are used for lists, and their difference is the first one is for lists without order and ol is for ordered lists."
    },
    {
      category: "Javascript",
      question: "What is a Mixin used for?",
      options: [
        "Creating objs from blueprint",
        "Injecting dependencies",
        "Sharing methods between classes",
        "Work with collections easily"
      ],
      correctAnswer: 2,
      hint: "Mixins encapsulate behaviour.",
      answerExplanation: "A mixin is a class containing methods that can be used by other classes without a need to inherit from it."
    },
    {
      category: "Javascript",
      question: "Which of the following are part of the 6 primitive data types? (latest ECMAScript Standard)",
      options: [
        "Float, Char",
        "Bit, Double",
        "BigInt, undefined",
        "Object, null"
      ],
      correctAnswer: 2,
      hint: "Structure data types are not primitive data types.",
      answerExplanation: "BigInt and undefined are primitive data types. More info here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures"
    },
    {
      category: "Javascript",
      question: "How can you get a new array removing duplicates from an array colors?",
      options: [
        "[new Set(colors)]",
        "[... new Set(colors)]",
        "new Map(colors)",
        "[...colors]"
      ],
      correctAnswer: 1,
      hint: "A Set is a data structure that doesn't allow duplicates.",
      answerExplanation: "Creating a set from the array removes the duplicates, then spread operator gets 1 by 1 the elements to put them back into an array."
    },
  ]
}