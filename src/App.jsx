
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "./utils.css"

import Header from "./commponents/header/Header";
import Footer from "./commponents/footer/Footer";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result"
import Error from "./pages/Error/Error";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState();
  
  const fetchQuestions = async (category = "", difficulty = "") => {
    const endPoint = `https://opentdb.com/api.php?amount=10
    ${category && `&category=${category}`}
    ${difficulty && `&difficulty=${difficulty}`}&type=multiple`;
    const res = await fetch(endPoint);
    const data = await res.json();
    setQuestions(data.results)
  }
  return (
    <ThemeProvider theme={darkTheme}>
<BrowserRouter>
      <div className="app" style={{ backgroundImage: 'url("./bg.ng")' }}>
        <Header />
          <Routes>
            <Route path="/" element={<Home name ={name} setName={setName} fetchQuestions={fetchQuestions}/>}/>
            <Route path="/quiz" element={<Quiz name= {name} questions={questions} setQuestions={setQuestions} score={score} setScore={setScore}/>}/>
            <Route path="/result" element={<Result name={name} score={score}/>}/>
            <Route path="*" element={<Error />}/>
            </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </ThemeProvider>

  )
}

export default App



// const endPoint = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
// const data = await (await fetch(endPoint)).json();
// console.log(data)
// return data.results.map((question) => (
//   {
//     ...question,
//     answers: [...question.incorrect_answers, question.correct_answer]
//   }
// ))
    // const { data } = await axios.get(`https://opentdb.com/api.php?amount=10
    // ${category && `&category=${category}`}
    // ${difficulty && `&difficulty=${difficulty}`}&type=multiple`)
    // console.log(data)



// console.log(questions)
//     return data.results.map((question) => (
//       {
//         ...question,
//         answers: [...question.incorrect_answers, question.correct_answer]
//       }
      
// ))



  // `https://opentdb.com/api.php?amount=10${
  //   category && `&category=${category}`
  // }${difficulty && `&difficulty=${difficulty}`}&type=multiple`