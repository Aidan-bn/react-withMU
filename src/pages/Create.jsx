import { Button, Container, TextField, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material"
//import { makeStyles } from '@mui/styles';
//import DeleteIcon from '@mui/icons-material/Delete';
import { AccessAlarmOutlined, RadioButtonChecked, SendAndArchiveRounded } from "@mui/icons-material";
import { useState } from "react";
import { Form } from "react-router";
import { useNavigate } from "react-router-dom";

// const useStyles = makeStyles({
//     btn: {
//         fontSize: '1.5rem',
//         backgroundColor: 'blue',
//         color: 'white',
//     }
// })



const Create = () => {
   const [title, setTitle] = useState('')
   const [description, setdescription] = useState('')
   const [category, setCategory] = useState('sport')
  const navigate = useNavigate()

   const handleSubmit = (e) => {
        e.preventDefault()
        if(title && description && category)
        //localStorage.setItem('note', JSON.stringify({title, description, category}))
        
        fetch('http://localhost:8000/notes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({title, description, category})
        })
        .then(res => res.json())
        .then(data => {
          navigate('/notes')
        })
   }

  return (
    <Container>
      <Typography 
        noWrap
        color="primary"
        >
        Create a new note
      </Typography>
      
      <form >
        <TextField 
         style={{marginTop: 20, marginBottom: 20}}
         label="Note Tittle"
         variant="outlined"
         fullWidth
         onChange={(e) => setTitle(e.target.value)}
        />
        <TextField 
         style={{marginTop: 20, marginBottom: 20}}
         multiline
         rows={4}
         label='description'
         fullWidth
         onChange={(e) => setdescription(e.target.value)}
        />
        <FormControl style={{marginTop: 20, marginBottom: 20, display: "block"}}>
        <FormLabel>Note category</FormLabel>
        <RadioGroup>
          <FormControlLabel
            value="coding"
            onChange={(e) => setCategory(e.target.value)}
            control={<Radio />}
            label="coding"
          />
          <FormControlLabel
            value="health"
            onChange={(e) => setCategory(e.target.value)}
            control={<Radio />}
            label="health"
          />
          <FormControlLabel
            value="sport"
            onChange={(e) => setCategory(e.target.value)}
            control={<Radio />}
            label="sport"
          />
        </RadioGroup>
        </FormControl>
        <Button
       variant="contained"
       type="submit"
       onClick={handleSubmit}
       endIcon={<SendAndArchiveRounded /> }
       >
        Submit
      </Button>
      </form>
      </Container>
  )
}

export default Create
