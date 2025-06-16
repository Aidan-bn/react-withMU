import { Container, Grid, Paper } from "@mui/material"
import { useEffect, useState } from "react"
import NoteCard from "./NoteCard"

const Notes = () => {
  const [storedNotes, setStoredNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setStoredNotes(data))
  }, [])
  
  return (
    <Container>
    <div>
      <h1>Notes Page</h1>
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        {storedNotes.map(note => (
          <Grid key={note.id} >
            <NoteCard note={note} />
          </Grid>
        ))}
      </Grid>
    </div>
  </Container>
  )
}

export default Notes
