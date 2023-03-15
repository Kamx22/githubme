import React, { useState } from "react";
import "./App.css";

function App() {
  
     // properties for my quiz

  const [showFinalResults, setFinalResults] = useState(false);
  const [score , setScore] = useState(0);
  const [CurrentQuestion, setCurrentQuestion] = useState(0);


  // Questions Array

  const questions = [
    
    {    
         text:  "Which property is used to control the spacing between elements in CSS ?",
         options: [ 
            { id: 0, text: "Border", isCorrect: false},
            { id: 1, text: "Margin", isCorrect: true},
            { id: 2, text: "Padding", isCorrect: false},
            { id: 3, text: "Spacing", isCorrect: false},
       
          ],
    },

    {   
        text:  "What is the correct way to declare a variable in JavaScript ?",
        options: [
            { id: 0, text: "let x", isCorrect: true},
            { id: 1, text: "var x", isCorrect: false },
            { id: 2, text: "sin x", isCorrect: false},
            { id: 3, text: "cos x", isCorrect: false},
          
        ],
    },

    {    
         text:  "Which property is used to change the text color of an element ?",
        options: [
          { id: 0, text: "Font", isCorrect: false},
          { id: 1, text: "Height ", isCorrect: false },
          { id: 2, text: "Color", isCorrect: true},
          { id: 3, text: " text", isCorrect: false},
         ],
        
        
    },

    { 
        text:  "Which of the following is not a valid value for the 'display' property in CSS ?",
        options: [
          { id: 0, text: " Block", isCorrect: false},
          { id: 1, text: "Flex ",  isCorrect: false },
          { id: 2, text: "Inline", isCorrect: false },
          { id: 3, text: " Vertical", isCorrect: true},
        ],
          
    },

    { 
        text:   "What is the smallest country in the world ?",
        options:[
          { id: 0, text: "Vertican city", isCorrect: true},
          { id: 1, text: "Nigeria ",  isCorrect: false },
          { id: 2, text: "Togo", isCorrect: false },
          { id: 3, text: " UnitedKingdom", isCorrect: false},
        ],
        
    },

    {  
      
        text:    "What is the largest mammal in the world ?",
        options:[
          { id: 0, text: "Giraffe", isCorrect: false},
          { id: 1, text: "Whale ",  isCorrect: true },
          { id: 2, text: "Hippopotamus", isCorrect: false },
          { id: 3, text: " Elephant", isCorrect: false},
        ],
        
    },

    {  
      
        text:  "What is the highest mountain in the world?",
        options:[
          { id: 0, text: "Kilimanjaro", isCorrect: false},
          { id: 1, text: "Everest ",  isCorrect: true },
          { id: 2, text: "Fako", isCorrect: false },
          { id: 3, text: " Himal", isCorrect: false},
        ],
        
    },

    {  
        
        text:  "What is the capital of France?",
        options:[
          { id: 0, text: "Cape town", isCorrect: false},
          { id: 1, text: "Paris ",  isCorrect: true },
          { id: 2, text: "London", isCorrect: false },
          { id: 3, text: " Abuja", isCorrect: false},
        ],
       
    },

    {  
        text:  "Which planet is closest to the sun?",
        options:[
          { id: 0, text: "Earth", isCorrect: false},
          { id: 1, text: "Pluto",  isCorrect: false },
          { id: 2, text: "Mars", isCorrect: false },
          { id: 3, text: " Mercury", isCorrect: true},
        ],
        
    },

    {  
        text:  "What is the most commonly spoken language in the world?",
        options: [
          { id: 0, text: "English", isCorrect: false},
          { id: 1, text: "French",  isCorrect: false},
          { id: 2, text: "Mandarin Chinese", isCorrect: true },
          { id: 3, text: " Spanish", isCorrect: false},
        ],
       
    },

];

// Helper Functions.
 
const optionClicked = (isCorrect) => {
  if( isCorrect) {
    setScore(score + 1 );
  }

   if (CurrentQuestion + 1 < questions.length) {
     setCurrentQuestion(CurrentQuestion + 1);
   } else {
    setFinalResults(true);
   }
}
const restartGame = () => {
  setScore(0);
  setCurrentQuestion(0);
  setFinalResults (false);
}

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1 className="header"> Quiz App </h1>
      {/* 2 Current Question */}
      <h2> Current Score: {score} </h2>
      {showFinalResults ? (
        /* 4 Final result  */
        <div className="final-results">
          <h1> Final results </h1>
          <h2> {score} out of {questions.length}  is correct({(score/questions.length) * 100 }%) </h2>
          <button onClick={() => restartGame ()}>Restart Game </button>
        </div>
      ) : (
        /* 3 Question Card */
        <div className="question-card ">
          <h2> Question {CurrentQuestion + 1} out of {questions.length} </h2>
          <h3 className="question-text">{questions[CurrentQuestion].text}</h3>

          <ul>
             {questions[CurrentQuestion].options.map ((option) => {
              return ( <li onClick={() => optionClicked(option.isCorrect)}  key={option.id}>{option.text}</li>);
             })}
          </ul>
        </div>
        
      )};

      
    </div>
  );
}

export default App;
