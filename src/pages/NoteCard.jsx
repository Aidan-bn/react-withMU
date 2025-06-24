import { DeleteOutlineOutlined } from "@mui/icons-material";
import { Card, CardContent, CardHeader, Grid, IconButton, Paper } from "@mui/material";

const NoteCard = ({ note, handleDelete }) => {

    return (
    <div>
      <Card>
        <CardHeader
          action={
            <IconButton>
                <DeleteOutlineOutlined
                onClick={() => handleDelete(note.id)} />
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