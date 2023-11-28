"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// State to store the screen width

const style = (width: number) => {
  return {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width || 500,
    height: 700,
    bgcolor: "background.paper",
    // bgcolor: "white",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
};

export default function KeepMountedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.screen.width : 0
  );

  // useEffect to update the screen width when the component mounts
  useEffect(() => {
    // Function to update the screen width in the state
    const updateScreenWidth = () => {
      setScreenWidth(window.screen.width);
    };

    // Add event listener for window resize
    window.addEventListener("resize", updateScreenWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <div>
      <Button
        onClick={handleOpen}
        className="absolute w-full h-full hover:bg-blend-darken"
      ></Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style(screenWidth < 500 ? screenWidth - 20 : 500)}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/survey/r5uGgpzcjkoptC55vMZn"
            style={{
              border: "none",
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            // scrolling="no"
            id="r5uGgpzcjkoptC55vMZn"
            title="Aparato Digestivo"
          ></iframe>
          <script
            async
            src="https://link.msgsndr.com/js/form_embed.js"
          ></script>
        </Box>
      </Modal>
    </div>
  );
}
