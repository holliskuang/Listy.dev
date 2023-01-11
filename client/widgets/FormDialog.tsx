import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog(AppProps: {
  type: string;
  data: string[] | unknown[];
  setPlaylistTitle: Function;
}) {
  const [open, setOpen] = React.useState(false);
  const [currentField, updateCurrentField] = React.useState("");

  const handleSubmit = async () => {
    handleClose();
    AppProps.setPlaylistTitle(currentField);
    updateCurrentField("");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTextChange = (e: any) => {
    updateCurrentField(e.target.value);
  };


  return (
    <div>
      <Button className="scrollButton" variant="outlined" onClick={handleClickOpen}>
        Create Your Playlist
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>One More Thing!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            What would you like to name your new playlist?
          </DialogContentText>
          <TextField
            onChange={handleTextChange}
            autoFocus
            margin="dense"
            name="name"
            fullWidth
            variant="standard"
            value={currentField}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
