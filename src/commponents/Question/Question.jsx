import { useState } from "react";
import "./Question.css"
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
// eslint-disable-next-line react/prop-types
const Question = ({ currentQuestion, setCurrentQuestion, questions, options, setOptions, correct,score,  setScore }) => {
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
    // Add logic to update score or perform other actions based on selected option
    if( option === correct) setScore(score + 1)
    setError(false)
  };

  const handleSelect = (option) =>{
    if( selected === option && selected === correct){
      return "correct"
    }else if( selected === option && selected !== correct){
      return "wrong"
    }else if( option === correct){
      return "correct"
    }
  }

  const navigate = useNavigate();
  const handleNext = () =>{
    if( currentQuestion > 8){
      navigate("/result")
    }else if(selected){
      setCurrentQuestion(currentQuestion + 1)
      setSelected();
    }else{
      setError("please selecte an option")
    }
  }


  const handleQuit = () =>{
    navigate("/result")
    // setCurrentQuestion(0)
    // setScore(0)
    // setSelected(null)
    // setError(false)
  }
  

  return (
    <div className="question">
      <div className="qCounter">Question {currentQuestion + 1}</div>
      <div className='singleQuestion'>
        <p className="qTitle">{questions[currentQuestion].question}</p>
        <div className='options'>
          {error && <ErrorMessage>Please select an option</ErrorMessage>}
          {options?.map((option) => (
            <button
              className={`singleOption ${selected && handleSelect(option)}`}
              key={option}
              onClick={() => handleOptionClick(option)}
              disabled = {selected ? true : false}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="Btns">
        <Button 
          variant="contained"
          color="secondary"
          size="larg"
          style ={{width : 185}}
          onClick={handleQuit}
        >Quit</Button>
        <Button
          variant="contained"
          color="primary"
          size="larg"
          style={{width : 185}}
          onClick={handleNext}
        >Next Quetion</Button>

        </div>
      </div>
    </div>
  );
};


export default Question;
// className={`singleOption ${selected === option && option === correct ? 'correct' : ''} ${selected === option && option !== correct ? 'wrong' : ''} ${option === correct ? 'correct' : ''}`}

// if( selected === correct){
//   setScore(score + 1)
//   setError(false)
//   setSelected(null)
//   setCurrentQuestion(currentQuestion + 1)
//   // setOptions()
// }else if(selected !== correct){ 
//   setScore(score)
//   setError(false)
//   setSelected(null)
//   setCurrentQuestion(currentQuestion + 1)
// }else if( currentQuestion > 8){
//   navigate("/result")
// }else{
//   setError(true)
// }