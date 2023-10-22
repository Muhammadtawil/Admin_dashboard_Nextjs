"use client";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { successAlert, updateAlert } from "../alerts/alerts";
import CustomTypography from "../shared/formsComponents";
import { useTranslations } from 'next-intl'
export default function BlogAddComponent({ onCreate }: { onCreate: any }) {
  const t = useTranslations('BlogPage')

  return (
    <>
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
            await onCreate(formData)
              .then(() => {
                successAlert('Blog Added Successfully');
                document.querySelector('form')?.reset();
              })
              .catch((error: any) => {

                console.error(error);
              });
          }}
        >
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
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={"Blog title"} />
              <TextField
                autoComplete="blogTitle"
                name="blogTitle"
                required
                fullWidth
                id="Blog title"
                label="Blog title"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={"Bloge Description"} />
              <TextField
                multiline
                minRows={10}
                autoComplete="blogContent"
                name="blogContent"
                required
                fullWidth
                id="blogContent"
                label="Blog Content"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <CustomTypography text={"Author"} />

              <TextField
                autoComplete="Author"
                name="authorName"
                required
                fullWidth
                id="authorName"
                label="Author"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
}
