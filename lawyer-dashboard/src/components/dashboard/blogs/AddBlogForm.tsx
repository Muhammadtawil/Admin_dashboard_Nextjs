"use client";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { successAlert, updateAlert } from "../alerts/alerts";
import CustomTypography from "../shared/formsComponents";
import { useTranslations } from 'next-intl'
import PageTitle from "../shared/PageTitle/pageTitle";
import { useEffect, useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import DOMPurify from "dompurify";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
export default function BlogAddComponent({ onCreate }: { onCreate: any }) {
  const t = useTranslations('BlogPage')
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [convertedContent, setConvertedContent] = useState('');
  const [isEditorEmpty, setIsEditorEmpty] = useState(true);
  const [status, setstatus] = useState("");

  useEffect(() => {
    const hasText = editorState.getCurrentContent().hasText();
    setIsEditorEmpty(!hasText);
    const htmlContent = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setConvertedContent(htmlContent);
  }, [editorState]);
  console.log(convertedContent);

  function createMarkup(html: any) {
    return {
      __html: DOMPurify.sanitize(html)
    };
  }




  const handleChange = (event: any) => {
    setstatus(event.target.value);
  };

  return (
    <>
            <PageTitle title={t('pageTitle')} />
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
            console.log(` Text : ${editedContent}`)
            await onCreate(formData)
              .then(() => {
                successAlert(t('success'));
                document.querySelector('form')?.reset();
                setEditorState(EditorState.createEmpty());
              })
              .catch((error: any) => {

                console.error(error);
              });
          }}
        >
          {!isEditorEmpty && (
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
              <AddIcon
                sx={{
                  position: "relative",
                  top: "-2px",
                }}
                className="mr-5px"
              />
            {t('CreateBlog')} 
            </Button>
          </Grid>
            
            )}   
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={t('blogTitle')}/>
              <TextField
                autoComplete="blogTitle"
                name="blogTitle"
                required
                fullWidth
                id="Blog title"
                label={t('blogTitle')}
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                  className:"client-input"
                }}
              />
            </Grid>


            <Grid item xs={12} md={12} lg={12} >
              <CustomTypography text={t('blogContent')} />
            
              <Editor
             
             editorState={editorState}
             onEditorStateChange={setEditorState}
             wrapperClassName="wrapper-class "
             editorClassName="editor-class client-box client-input"
             toolbarClassName="toolbar-class"
                           
                           />
  
                  {/* <div
    className="preview"
    dangerouslySetInnerHTML={createMarkup(convertedContent)}>
  </div> */}
            </Grid>
    {/* <TextField
                multiline
                minRows={10}
                autoComplete="blogContent"
                name="blogContent"
                required
                fullWidth
                id="blogContent"
                label={t('blogContent')}
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              /> */}
   

            <Grid item xs={12} md={12} lg={6}>
              <CustomTypography text={t('author')} />

              <TextField
                autoComplete="Author"
                name="authorName"
                required
                fullWidth
                id="authorName"
                label={t('author')}
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                  className:"client-input"
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <CustomTypography text={t('lang')}/>

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{t('lang')}</InputLabel>
                <Select
                   className="client-input"
                  name="blogLang"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label={t('lang')}
                  onChange={handleChange}
                >
                  <MenuItem value={"arabic"}>{t('arabic')}</MenuItem>
                  <MenuItem value={"english"}>{t('english')}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Card>
               

    </>
  );
}




