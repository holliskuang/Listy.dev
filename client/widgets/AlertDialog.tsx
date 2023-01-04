import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/router";

export default function AlertDialog(props: { img: string; url: string }) {
  const [open, setOpen] = React.useState(true);
  const router = useRouter();
  const handleClose = () => {
    setOpen(false);
  };

  function openlink(url: string) {
    const win = window.open(url, "_blank");
    if (win != null) {
      win.focus();
    }
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Success!</DialogTitle>
        <DialogContent>
          <img
            src={props.img}
            alt="playlist"
            onClick={() => openlink(props.url)}
          />
          <DialogContentText id="alert-dialog-description">
            Your playlist has been created.
          </DialogContentText>
          <Button onClick={() => openlink(props.url)}>Let Me See!</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
