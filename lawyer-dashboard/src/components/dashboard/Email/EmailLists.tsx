"use client";

import { Box, Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import {useState } from "react";
import RichTextEditor from "@mantine/rte";
import SendIcon from '@mui/icons-material/Send';
import { successAlert } from "../alerts/alerts";

import {convert} from "html-to-text";
import PageTitle from "../shared/PageTitle/pageTitle";
import { useTranslations } from "next-intl";
import { IoPersonAddSharp } from "react-icons/io5";
import StyledDialogTitle from "../shared/StyledDialogTitle";
import EmailSelect from "./emails_select";

export default function EmailLists({ sendEmail ,subscribersEmail}: {sendEmail:any,subscribersEmail:any}) {
const t=useTranslations('emailPage')
  const [content, setContent] = useState(""); // Step 1: Create state for content
  const [openMember, setOpenMember] = useState(false);

  const handleContentChange = (newContent: any) => {
    // Step 2: Update the content state when it changes
    setContent(newContent);
  };
  const clearContent = () => {
    setContent("");
  };
  const handleCloseMember = () => {
    setOpenMember(false);
  };

  const handleClickOpenMember = () => {
    setOpenMember(true);
  };

  const handleSelectClick = () => {
    handleClickOpenMember();
  };
  const subscribersEmailsList = subscribersEmail.map((subscriber:any) => subscriber.subscriberEmail)
  const [toEmails, setToEmails] = useState([]);


  return (
    <>
      <PageTitle title={t('pageTitle')}/>

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
     
        </Box>

        <Box component="form" noValidate={false} action={async  (formData)=>{
    
// Use the html-to-text library to convert HTML to plain text
const plainTextContent = convert(content, {
  wordwrap: 400, // Prevent line wrapping

});
          formData.append("content", plainTextContent);       
         
          sendEmail(formData, plainTextContent).then(() => {
            successAlert('Email Sent Successfully')
            document.querySelector('form')?.reset();
            clearContent()
          });

          
    
         
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
                  label={t('to')}
                  value={toEmails.length>0?toEmails:null}
                  autoFocus
                  InputProps={{
                    style: { borderRadius: 8 },
                    className:"client-input"
                  }}
                />
                           <IconButton
                aria-label="User Icon"
                onClick={() => handleSelectClick()}
              >
              <IoPersonAddSharp/>
              </IconButton>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="subject"
                  name="subject"
                  required
                  fullWidth
                  id="subject"
                  label={t('subject')}
                  autoFocus
                  InputProps={{
                    style: { borderRadius: 8 },
                    className:"client-input"
                  }}
                />
              </Grid>

              <Grid item xs={12}>

                <RichTextEditor
                  className="client-box"
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
           {t('send')}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <StyledDialogTitle
        onClose={handleCloseMember}
        aria-labelledby="customized-dialog-title"
        open={openMember}
      >
        <EmailSelect
          usersName={subscribersEmail}
          handleClose={handleCloseMember}
      
           
            toEmails={toEmails}
            setToEmails={setToEmails}
        />
      </StyledDialogTitle>
      </Box>

    </>
  );
}
