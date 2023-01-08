import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Slide, { SlideProps } from '@mui/material/Slide';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type TransitionProps = Omit<SlideProps, 'direction'>;

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(true);

  function TransitionUp(props: TransitionProps) {
    return <Slide {...props} direction="up" />;
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={open} autoHideDuration={4000} anchorOrigin={{ vertical:"bottom", horizontal: "right" }} TransitionComponent= {TransitionUp}


      onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          You're In!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
