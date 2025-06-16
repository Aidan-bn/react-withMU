import { Button, Container, TextField, Typography } from "@mui/material"
//import { makeStyles } from '@mui/styles';
//import DeleteIcon from '@mui/icons-material/Delete';
import { AccessAlarmOutlined, SendAndArchiveRounded } from "@mui/icons-material";
import { useState } from "react";

// const useStyles = makeStyles({
//     btn: {
//         fontSize: '1.5rem',
//         backgroundColor: 'blue',
//         color: 'white',
//     }
// })



const Create = () => {
   // const classes = useStyles();
   const [title, setTitle] = useState('')
   const [description, setdescription] = useState('')

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
        
        <Button
    //    style={{
    //     fontSize: '1.5rem', 
    //     backgroundColor: 'primary', 
    //     color: 'white',
    //     '&:hover': {
    //         backgroundColor: 'pink',
    //         color: 'yellow'
    //     }}}
       variant="contained"
       type="submit"
       onClick={(e) => {
            e.preventDefault()
            if(title && description)
            alert('Am clicked ' + title + description)
        }}
       endIcon={<SendAndArchiveRounded /> }
       >
        Submit
      </Button>
      </form>
      

      </Container>
  )
}

export default Create
