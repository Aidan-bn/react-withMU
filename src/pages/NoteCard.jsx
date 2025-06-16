import { DeleteOutlineOutlined } from "@mui/icons-material";
import { Card, CardContent, CardHeader, Grid, IconButton, Paper } from "@mui/material";

const NoteCard = ({ note }) => {
    const handleDelete = () => {
        fetch(`http://localhost:8000/notes/${note.id}`, {
            method: 'DELETE'
        })
        .then((id) => {
            console.log('Note deleted successfully:', id);

        })
        .catch(err => console.error('Error deleting note:', err));
    }
  return (
    <div>
      <Card>
        <CardHeader
        action={
            <IconButton>
                <DeleteOutlineOutlined
                onClick={handleDelete} />
            </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <p>{note.description}</p>
      </CardContent>
    </Card>
    </div>
  )
}

export default NoteCard