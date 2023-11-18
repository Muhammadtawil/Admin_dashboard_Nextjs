"use client";
import{ useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Image from 'next/image'
import CustomTypography, { FormFooter } from "../shared/formsComponents";
import { updateAlert } from "../alerts/alerts";
import { useTranslations } from "next-intl";
import { Editor } from "react-draft-wysiwyg";
import { ContentState, EditorState, convertFromHTML, convertToRaw  } from "draft-js";
import DOMPurify from "dompurify";
import draftToHtml from "draftjs-to-html";
export default function EditBlogAddComponent({
  onUpdate,
  UpdateImage,
  selectedBlog,
  handleClose,
}: {
  onUpdate: any;
  UpdateImage: any;
  selectedBlog: any;
  handleClose: any;
  }) {
  const t=useTranslations('BlogPage')
  const [selectedImage, setSelectedImage] = useState<File>();
  const [convertedContent, setConvertedContent] = useState('');


  const [editorState, setEditorState] = useState(() => {
    const contentState = convertFromHTML(DOMPurify.sanitize(selectedBlog?.blogContent || ''));
    return EditorState.createWithContent(ContentState.createFromBlockArray(contentState.contentBlocks));
  });
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };
  useEffect(() => {
    const htmlContent = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setConvertedContent(htmlContent);
  }, [editorState]);
  
  
  const handleUpdate = async () => {
    const formData = new FormData();
    // Append the selected image to the formData
    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    await UpdateImage(formData,selectedBlog.blogId);
  };

  // Select Priority
  const [status, setstatus] = useState("");
  const handleChange = (event: any) => {
    setstatus(event.target.value);
  };

  const [formData, setFormData] = useState({
    // Initialize the form data with the selected task's values
    blogTitle: selectedBlog?.blogTitle,
    blogContent: selectedBlog?.blogContent || "",
    authorName: selectedBlog?.author.authorName || "",
    isFlag: selectedBlog?.isFlag || "",
  });

  useEffect(() => {
    // Update the form data when the selectedTask prop changes
    setFormData({
      blogTitle: selectedBlog?.blogTitle,
      blogContent: selectedBlog?.blogContent || "",
      authorName: selectedBlog?.author.authorName || "",
      isFlag: selectedBlog?.isFlag == true ? "ready" : "not ready" || "",
    });
  }, [selectedBlog]);

  // Handle form input changes
  const handleInputChange = (
    e: any
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function createMarkup(html:any) {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }

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
          action={async (formData) => {
            const editedContent= createMarkup(convertedContent)
    
            formData.append('blogContent', `${convertedContent}`);
           


            await onUpdate(
              formData,
              selectedBlog.blogId,
              selectedBlog.author.authorId
            ).then(() => {
              handleClose();
              updateAlert(t('update'))
              handleUpdate();
            });
          }}
        >
          <Grid container alignItems="center" spacing={2} className="client-box">
            <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={t('blogTitle')}/>

              <TextField
                autoComplete="blogTitle"
                name="blogTitle"
                required
                fullWidth
                id="Blog title"
                label={t('blogTitle')}
                value={formData.blogTitle}
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                className:"client-input"
                }}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <CustomTypography text={t('image')}/>

              <input
                autoComplete="image"
                name="image"
                accept="image/png"
                id="image"
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
                  height={150}
         
                />
              </div>
            )}

            {/* <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={t('blogContent')} />

              <TextField
                multiline
                minRows={10}
                autoComplete="blogContent"
                name="blogContent"
                required
                fullWidth
                value={formData.blogContent}
                id="blogContent"
                label={t('blogContent')}
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
             editorClassName="editor-class client-box client-input"
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
                <InputLabel id="demo-simple-select-label">status</InputLabel>
                <Select
                      className="client-input"
                  name="isFlag"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.isFlag}
                  label={t('status')}
                  onChange={handleInputChange}
                >
                  <MenuItem value={"ready"}>{t('ready')}</MenuItem>
                  <MenuItem value={"not ready"}>{t('notReady')}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <CustomTypography text={t('author')} />

              <TextField
                autoComplete="Author"
                name="authorName"
                required
                fullWidth
                value={formData.authorName}
                id="authorName"
                label={t('author')}
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                  className:"client-input"
                }}
                onChange={handleInputChange}
              />
            </Grid>
            <FormFooter handleClose={handleClose} title={t('editBlog')} />

          </Grid>
        </Box>
      </Card>
    </div>
  );
}
