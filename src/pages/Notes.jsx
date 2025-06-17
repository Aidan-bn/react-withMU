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

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8000/notes/${id}`, {
        method: 'DELETE'
      })
     const updatedNotes = storedNotes.filter(note => note.id !== id)
      setStoredNotes(updatedNotes)
      console.log('Note deleted successfully:', id)
    } catch (err) {
      console.error('Error deleting note:', err)
    }
  }
  
  return (
    <Container>
    <div>
      <h1>Notes Page</h1>
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        {storedNotes.map(note => (
          <Grid key={note.id} >
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </div>
  </Container>
  )
}

export default Notes
