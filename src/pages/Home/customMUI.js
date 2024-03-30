import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white', // Border color for unfocused state
      },
      '&:hover fieldset': {
        borderColor: 'white', // Border color for hover state
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white', // Border color for focused state
      },
      '& .MuiOutlinedInput-input': {
        color: 'white', // Text color
      },
      '& .MuiInputLabel-root': {
        color: 'white', // Placeholder text color
      },
      '&::placeholder': {
        color: 'white', // Placeholder color
      },
    },
  },
});

const CustomTextField = () => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.root}
      placeholder="Enter Your Name"
      label="Full Name"
      style={{ width: "100%", marginTop: "20px" }}
      variant="outlined"
    />
  );
}

export default CustomTextField;
