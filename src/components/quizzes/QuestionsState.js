export function getQuestions(){
  return [
    {
      category: "Javascript",
      questionDesc: "Which of the following methods allow you to add an element to myArray at the end?",
      options: [
        "myArray.pop(element)",
        "myArray.shift(element)",
        "myArray.unshift(element)",
        "myArray.push(element)"
      ],
      correctAnswer: 3,
      hint: "Only push and unshift methods allow you to add items, one at the first position and the other at last.",
      answerExplanation: "The push() method adds new items to the end of an array, and returns the new length.",
      answerHTML: ""
    },
    {
      category: "Javascript",
      questionDesc: "How do you log the value of a variable myName to the console?",
      options: [
        "myName.consoleLog()",
        "myName.log()",
        "console.log(myName)",
        "consoleLog(myName.value)"
      ],
      correctAnswer: 2,
      hint: "console is an object in JS that has a lot of functions you can use!",
      answerExplanation: "The console.log() method allows you to log into the console whatever you put as a parameter.",
      answerHTML: ""
    },
    {
      category: "Javascript",
      questionDesc: "How do you access the property 'loved languages' from the object aDeveloper?",
      options: [
        "aDeveloper.lovedlanguages",
        "aDeveloper.lovedLanguages",
        "aDeveloper['loved languages']",
        "aDeveloper[loved languages]"
      ],
      correctAnswer: 2,
      hint: "JS can´t handle whitespaces for you with the dot notation for accessing properties.",
      answerExplanation: "The correct way to access properties with a space in its name is using the bracket notation with the property name as a string.",
      answerHTML: ""
    },
    {
      category: "Javascript",
      questionDesc: "How do you remove the property 'boring' from the object myself?",
      options: [
        "delete boring from myself",
        "delete myself.boring",
        "myself.boring delete",
        "delete(boring)"
      ],
      correctAnswer: 1,
      hint: "delete is an operator that can be used on objects.",
      answerExplanation: "The way to remove a property from an object is with the delete operator followed by the object.property you want to remove.",
      answerHTML: ""
    },
    {
      category: "Javascript",
      questionDesc: "Which option creates a new array that results from applying 'someFunction' to each element?",
      options: [
        "myArray.map(someFunction)",
        "myArray.filter(someFunction)",
        "myArray.every(someFunction)",
        "myArray.find(someFunction)"
      ],
      correctAnswer: 0,
      hint: "We are not looking for items that are true for a predicate, rather to transform each item into something else.",
      answerExplanation: "The array method that allows us to transform each element into something different is map, it returns a new array with the mapping of each element after applying the parameter function.",
      answerHTML: ""
    },
    {
      category: "HTML",
      questionDesc: "Which tag is used for further describing the surrounding content? (indirectly related)",
      options: [
        "<article>",
        "<footer>",
        "<aside>",
        "<indirect>"
      ],
      correctAnswer: 2,
      hint: "The correct tag is usually used for a sidebar in a document.",
      answerExplanation: "The tag <aside> represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes.",
      answerHTML: ""
    },
    {
      category: "HTML",
      questionDesc: "Where should the <title> tag be written?",
      options: [
        "Inside the <head>",
        "Inside the <body>",
        "Inside the <header>",
        "None of the above."
      ],
      correctAnswer: 0,
      hint: "The correct answer is a tag that can only be written once in an HTML document and is usually at the top.",
      answerExplanation: "The <head> element is a container for metadata (data about data), it contains between several things the <title> (which is required in every HTML document).",
      answerHTML: ""
    },
  ]
}