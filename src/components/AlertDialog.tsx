import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type DialogProps = {
  open: boolean;
  callBack: () => void;
  title: string;
  text: string;
};
export default function AlertDialog(props: DialogProps) {
  const { open, callBack, title, text } = props;

  return (
    <Dialog open={open} onClose={callBack}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={callBack}>cancle</Button>
        <Button onClick={callBack} autoFocus>
          sure
        </Button>
      </DialogActions>
    </Dialog>
  );
}
