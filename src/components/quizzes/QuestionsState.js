export function getQuestions(){
  return [
    {
      questionDesc: "Which of the following methods allow you to add an element to myArray at the end?",
      options: [
        "myArray.pop(element)",
        "myArray.shift(element)",
        "myArray.unshift(element)",
        "myArray.push(element)"
      ],
      correctAnswer: 3,
      answerExplanation: "The push() method adds new items to the end of an array, and returns the new length.",
      answerHTML: ""
    },
    {
      questionDesc: "How do you log the value of a variable myName to the console?",
      options: [
        "myName.consoleLog()",
        "myName.log()",
        "console.log(myName)",
        "consoleLog(myName.value)"
      ],
      correctAnswer: 2,
      answerExplanation: "The console.log() method allows you to log into the console whatever you put as a parameter.",
      answerHTML: ""
    },
  ]
}