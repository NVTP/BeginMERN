import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -100%)",
  width: "80%",
  maxWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid #0000001f",
  boxShadow: 10,
  p: 2,
};

export default function modalConfirm(props) {
  const {
    open,
    handleClose,
    handleOkConfirm,
    headerText,
    text,
    OkButtonText,
    closeButtonText,
  } = props;

  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {headerText}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: "center" }}
          >
            {text}
          </Typography>
          <Stack direction="row" justifyContent="space-between">
            <Button
              sx={{
                marginTop: "6%",
                textTransform: "none",
              }}
              onClick={handleClose}
              variant="contained"
              color="inherit"
            >
              {closeButtonText}
            </Button>
            <Button
              sx={{
                marginTop: "6%",
                marginRight: "3%",
                textTransform: "none",
              }}
              onClick={handleOkConfirm}
              variant="contained"
              color="warning"
            >
              {OkButtonText}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
