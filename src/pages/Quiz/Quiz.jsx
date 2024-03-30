/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import "./Quiz.css";

import Question from "../../commponents/Question/Question.jsx";

// eslint-disable-next-line react/prop-types
const Quiz = ({ name, questions, setQuestions, score, setScore }) => {
  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);


  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currentQuestion]?.correct_answer,
          // eslint-disable-next-line no-unsafe-optional-chaining, react/prop-types
          ...questions[currentQuestion]?.incorrect_answers,
        ])
    );
  }, [questions, currentQuestion]);

  const handleShuffle = (optionsArray) => {
    return optionsArray.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <div className="content">
        {questions ? (
          <div className="questionInfo">
            <span className="subtitle">Welcome: {name}</span>
            <div className="cateScore">
            <span>{questions[currentQuestion].category}</span>
            <span>Score: {score}</span>
            </div>
            <Question 
              currentQuestion = {currentQuestion}
              setCurrentQuestion = {setCurrentQuestion}
              questions = {questions}
              setQuestions = {setQuestions}
              options = {options}
              correct = {questions[currentQuestion]?.correct_answer}
              score = {score}
              setScore = {setScore}
              setOptions = {setOptions}
            />
          </div>
        ) : (
          <div className="loader">
            <CircularProgress color="inherit" style={{ width: "50px", height: "50px" }}/>
          </div>
        )}
      </div>
      <div className="imageContainer">
        <img src="quiz 2.svg" alt="" className="quizImg2" />
      </div>
    </div>
  );
};

export default Quiz;
