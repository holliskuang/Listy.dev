import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AlertDialog(props: { img: string; url: string }) {
  useEffect(() => {
    setOpen(true);
  }, [props.url]);

  const [open, setOpen] = React.useState(false);
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
        <div className="popUp">
          <DialogTitle id="alert-dialog-title">Success!</DialogTitle>
          <DialogContent>
            <img
              className="popUpImg"
              src={props.img}
              alt="playlist"
              onClick={() => openlink(props.url)}
            />
            <DialogContentText id="alert-dialog-description">
              Your playlist has been created.
            </DialogContentText>
            <div className="popUpButtonBox">
              <Button className="popUpButtons" onClick={handleClose}>
                Close
              </Button>
              <Button
                className="popUpButtons"
                onClick={() => openlink(props.url)}
              >
                Let Me See!
              </Button>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
