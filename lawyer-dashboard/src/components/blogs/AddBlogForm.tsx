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
import PageTitle from "../shared/PageTitle/pageTitle";
export default function BlogAddComponent({ onCreate }: { onCreate: any }) {
  const t = useTranslations('BlogPage')

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
            await onCreate(formData)
              .then(() => {
                successAlert(t('success'));
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
                }}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={t('blogContent')} />
              <TextField
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
              />
            </Grid>

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
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
}
