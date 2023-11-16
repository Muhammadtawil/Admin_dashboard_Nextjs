"use client"
// Import necessary dependencies
import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import draftToHtml from "draftjs-to-html";
import mammoth from "mammoth";
import { saveAs } from "file-saver";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PageTitle from "../shared/PageTitle/pageTitle";
import { useTranslations } from "next-intl";

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const t=useTranslations('editorPage')

  const handleSaveToDocx = () => {
    const htmlContent = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    console.log(htmlContent)
    // Create a Blob from the HTML content
    const blob = new Blob([htmlContent], {
      type: "application/msword",
    });

    saveAs(blob, "document.docx");
  };

  return (
    <>
         <PageTitle title={t('pageTitle')}/>
      <Box
        sx={{
          // display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #EEF0F7",
          paddingBottom: "10px",
          mb: "20px",
         
        }}
        className="client-box"
      >
        <Button
          onClick={handleSaveToDocx}
          style={{
            textTransform: "capitalize",
            borderRadius: "8px",
            fontWeight: "500",
            fontSize: "13px",
            padding: "12px 20px",
            color: "#fff",
            backgroundColor: "#1976D2",
        alignItems:"self-end",
            border: "none",
          }}
        >
          <AddIcon
            sx={{ position: "relative", top: "-1px" }}
            className="mr-5px"
          />
        {t('saveFile')}
        </Button>
      </Box>
      <div>
        <Editor
          
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class client-input client-box"
          toolbarClassName="toolbar-class"
        />
      </div>
    </>
  );
};

export default MyEditor;
