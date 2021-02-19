const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = [];
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 'What was the first American woman in Space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer= [];
let questions = ["Who was the first American woman in Space? ", "True or False: 5000 meters == 5 kilometers?", "(5+3)/2*10 = ? ", "Given the array [8, 'orbit', 'Trajectory', 45], what is the entry index at 2? ", "What is the minimum crew size for the ISS? "] ;
let correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];
let candidateAnswers = [];


  // TODO 1.1b: Ask for candidate's name //
function askForName(){
  candidateName = input.question("What is your name? ")
  //console.log('Hello $[candidateName]')
}
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
function askQuestion(){
for (let i = 0; i < questions.length; i++){
    candidateAnswers[i] = input.question(`[${i+1}] ${questions[i]}`);
    console.log(gradeQuiz(candidateAnswers));
    console.log(`\n`)
  }
}
// candidateAnswers = input.question(${question})


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 for (let i = 0; i < candidateAnswers.length; i++){
    console.log(`Your Answer: ${candidateAnswers[i]}, \nCorrect Answer ${correctAnswers[i]}`)
    }
 }
 for (i=0; i < candidateAnswers.length; i++){
   if (candidateAnswers[i] === correctAnswers[i]){
     console.log(`That is correct`)
   }
   else{
     console.log(`That is incorrect`)
   }
 }

  let grade = 0;
  let finalGrade = 0;

  for (i=0; i < candidateAnswers.length; i ++){
    if(candidateAnswers[i] === correctAnswers[i])
    grade++;
    finalGrade = (`${grade/5} %`)
    console.log(`Final Grade is: ${finalGrade}. ${grade} out of 5 answers correct!`)
  }
  return grade;

function runProgram(){
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hello Candidate ${candidateName}`)
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  return gradeQuiz;
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};