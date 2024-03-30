import { useState } from "react";
// import { useHistory } from "react-router"
import { useNavigate } from "react-router";
import { Button, MenuItem, TextField } from "@mui/material";
import Categories from "../../Data/Categories.js";
import "./Home.css";
import ErrorMessage from "../../commponents/ErrorMessage/ErrorMessage.jsx";

// eslint-disable-next-line react/prop-types
const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDificulty] = useState("");
  const [error, setError] = useState(false);
  // const history = useHistory();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(e);
    if (!name || !category || !difficulty) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span>Quiz Settings</span>
        <div className="settings_select">
          {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
          {/* Name Input */}

          <TextField
            size="small"
            required
            color="primary"
            placeholder="Enter Your Name"
            label="Full Name"
            style={{ marginBottom: "25px", marginTop: "30px" }}
            variant="outlined"
            InputLabelProps={{
              style: {
                color: "white", // Change placeholder text color
                borderColor: "inherit",
              },
            }}
            inputProps={{
              style: {
                backgroundColor: "transparent", // Change background color to transparent
                color: "white", // Change text color
              },
            }}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <TextField
            size="small"
            select
            label="Select Category"
            variant="outlined"
            color="primary"
            style={{ marginBottom: "25px" }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            size="small"
            select
            label="Select Difficulty"
            variant="outlined"
            color="primary"
            style={{ marginBottom: "25px" }}
            onChange={(e) => setDificulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
          </TextField>

          <button
            onClick={handleSubmit}
            className="start"
          >
            
            Start Quiz
          </button>
        </div>
      </div>
      <div>
        <img src="quiz.svg" alt="" className="quizImg" />
      </div>
    </div>
  );
};

export default Home;
