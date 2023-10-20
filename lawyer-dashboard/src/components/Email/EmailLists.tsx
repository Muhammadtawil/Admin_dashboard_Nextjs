"use client";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import RichTextEditor from "@mantine/rte";
import SendIcon from '@mui/icons-material/Send';
import { updateTaskAlert } from "../alerts/alerts";
import DOMPurify from 'dompurify';
import he from 'he';
import {convert} from "html-to-text";
export default function EmailLists({ sendEmail }: any) {

  const [content, setContent] = useState(""); // Step 1: Create state for content

  const handleContentChange = (newContent: any) => {
    // Step 2: Update the content state when it changes
    setContent(newContent);
  };

  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();

  //   const formData = new FormData(event.target);
  //   formData.append("content", content); // Step 3: Include content in formData

  //   await sendEmail(formData);
  //   updateTaskAlert();
  // };

  return (
    <>

      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#EDEFF5",
            borderRadius: "8px",
            padding: "15px 20px",
          }}
          className="bg-black"
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontWeight: "500",
              fontSize: "18px",
            }}
          >
            New Message
          </Typography>
        </Box>

        <Box component="form" noValidate action={async (formData) => {
    
// Use the html-to-text library to convert HTML to plain text
const plainTextContent = convert(content, {
  wordwrap: 400, // Prevent line wrapping

});

formData.append("content", plainTextContent); // Include content in formData
          await sendEmail(formData,plainTextContent);
          updateTaskAlert();
        }}>
          <Box
            sx={{
              background: "#fff",
              padding: "30px 20px",
              borderRadius: "8px",
            }}
            className="dark-BG-101010"
          >
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="to"
                  name="receivers"
                  required
                  fullWidth
                  id="to"
                  label="To"
                  autoFocus
                  InputProps={{
                    style: { borderRadius: 8 },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="subject"
                  name="subject"
                  required
                  fullWidth
                  id="subject"
                  label="Subject"
                  autoFocus
                  InputProps={{
                    style: { borderRadius: 8 },
                  }}
                />
              </Grid>

              <Grid item xs={12}>

                <RichTextEditor
translate="yes"
                  value={content}
                  onChange={handleContentChange}
                  id="content"
                  controls={[
                    ["bold", "italic", "underline", "link", "image"],
                    ["unorderedList", "h1", "h2", "h3"],
                    ["sup", "sub"],
                    ["alignLeft", "alignCenter", "alignRight"],
                  ]}
                />
              </Grid>

              <Grid item xs={12} textAlign="end">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 1,
                    textTransform: "capitalize",
                    borderRadius: "8px",
                    fontWeight: "500",
                    fontSize: "13px",
                    padding: "12px 20px",
                    color: "#fff !important",
                  }}
                >
                  <SendIcon
                    sx={{
                      position: "relative",
                      top: "-2px",
                    }}
                    className="mr-5px"
                  />
                  Send
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

    </>
  );
}
