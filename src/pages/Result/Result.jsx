import { useEffect } from "react"
import { useNavigate } from "react-router"
import { Button } from "@mui/material"
import "./Result.css"

const Result = ({name, score}) => {

  const navigate = useNavigate()
  // const name = localStorage.getItem("name")
  useEffect(()=>{
    if(!name){
      navigate("/")
    }
  },[name, navigate])
  return (
    <div className="result">
      <span className="title">Your Score is : {score}</span>
      <Button 
        variant="contained"
        color="success"
        size="larg"
        style={{ alignSelf : "center", marginTop : "20px"}}
        // onClick={() => navigate("/")}
        href="/"
      >
        Go to Homepage 
      </Button>
      
    </div>
  )
}

export default Result
