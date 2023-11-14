"use client";
import React, { useEffect, useState } from "react";
import { Box, } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { updateAlert } from "../alerts/alerts";
import CustomTypography, { FormFooter } from "../shared/formsComponents";
import Image from 'next/image'
import { useTranslations } from "next-intl";
import { Editor } from "react-draft-wysiwyg";
import { ContentState, EditorState, convertFromHTML  } from "draft-js";
import DOMPurify from "dompurify";


export default function EditNewsComponent({
  onUpdate,
  UpdateImage,
  selectedNews,
  handleClose,
}: {
  onUpdate: any;
  UpdateImage: any;
  selectedNews: any;
  handleClose: any;
  }) {
  const t=useTranslations('newsPage')
  const [selectedImage, setSelectedImage] = useState<File>();
  const [editorState, setEditorState] = useState(() => {
    const contentState = convertFromHTML(DOMPurify.sanitize(selectedNews?.newsContent || ''));
    return EditorState.createWithContent(ContentState.createFromBlockArray(contentState.contentBlocks));
  });
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      console.log(e.target.files[0]);
      console.log(selectedNews.newsId);
    }
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    // Append the selected image to the formData
    if (selectedImage) {
      formData.append("image", selectedImage);
    }
    // formData.append("newsId", selectedNews.newsId);
    await UpdateImage(formData, selectedNews.newsId);
  };

  // Select Priority
  const [status, setstatus] = React.useState("");
  const handleChange = (event: any) => {
    setstatus(event.target.value);
  };

  const [formData, setFormData] = useState({
    // Initialize the form data with the selected task's values
    newsTitle: selectedNews?.newsTitle,
    newsContent: selectedNews?.newsContent || "",
    isFlag: selectedNews?.isFlag || "",
  });

  useEffect(() => {
    // Update the form data when the selectedTask prop changes
    setFormData({
      newsTitle: selectedNews?.newsTitle,
      newsContent: selectedNews?.newsContent || "",
      isFlag: selectedNews?.isFlag == true ? "ready" : "not ready" || "",
    });
  }, [selectedNews]);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div style={{ maxHeight: "100%", overflowY: "auto" }}>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 20px 15px",
          mb: "15px",
        }}
      >
        <Box
          component="form"
          noValidate={false}
          action={ (formData) => {
            handleUpdate();
         

            onUpdate(formData, selectedNews.newsId, selectedImage).then(() => {
              handleClose();
            updateAlert(t('update'));

             });
          }}
        >
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={t('newsTitle')} />

              <TextField
                autoComplete="NewsTitle"
                name="newsTitle"
                required
                fullWidth
                id="newsTitle"
                label={t('newsTitle')}
                value={formData.newsTitle}
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <CustomTypography text={t('image')} />

              <input
                autoComplete="image"
                name="image"
                accept="image/png"
                id={t('image')}
                type="file"
                autoFocus
                onChange={(files) => handleImageChange(files)}
              />
            </Grid>

            {selectedImage && (
              <div>
                <h3>{t('Preview')}:</h3>
                <Image
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  width="200"
                  height={200}
                />
              </div>
            )}

            
            
            {/* <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={t('newsContent')} />

              <TextField
                multiline
                minRows={10}
                autoComplete="newsContent"
                name="newsContent"
                required
                fullWidth
                value={formData.newsContent}
                id="newsContent"
                label={t('newsContent')}
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
                onChange={handleInputChange}
              />
            </Grid> */}
     <Grid item xs={12} md={12} lg={12} >
              <CustomTypography text={t('blogContent')} />
            
              <Editor
             
             editorState={editorState}
             onEditorStateChange={setEditorState}
             wrapperClassName="wrapper-class"
             editorClassName="editor-class"
             toolbarClassName="toolbar-class"
                           
                           />
  
                  {/* <div
    className="preview"
    dangerouslySetInnerHTML={createMarkup(convertedContent)}>
  </div> */}
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <CustomTypography text={t('status')}/>

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{t('status')}</InputLabel>
                <Select
                  name="isFlag"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label={t('status')}
                  onChange={handleChange}
                >
                  <MenuItem value={"ready"}>{t('ready')}</MenuItem>
                  <MenuItem value={"not ready"}>{t('notReady')}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
       
            {/* <Grid item xs={12} md={12} lg={6}>
              <CustomTypography text={"Author"} />

              <TextField
                autoComplete="Author"
                name="authorName"
                required
                fullWidth
                value={formData.authorName}
                id="authorName"
                label="Author"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
                onChange={handleInputChange}
              />
            </Grid> */}
            <FormFooter handleClose={handleClose} title={"Edit News"} />
          </Grid>
        </Box>
      </Card>
    </div>
  );
}
