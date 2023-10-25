"use client";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { successAlert } from "../alerts/alerts";
import CustomTypography from "../shared/formsComponents";
import { useTranslations } from "next-intl";

export default function NewsAddComponent({ onCreate }: { onCreate: any }) {
  const t=useTranslations('newsPage')
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
          action={ (formData) => {
             onCreate(formData).then(() => {
            successAlert(t('success'));
            document.querySelector('form')?.reset();

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
             {t('addNews')}
            </Button>
          </Grid>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={t('newsTitle')} />
              <TextField
                autoComplete="NewsTitle"
                name="NewsTitle"
                required
                fullWidth
                id="NewsTitle"
                label={t('newsTitle')}
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={t('newsContent')}/>
              <TextField
                multiline
                minRows={5}
                autoComplete="NewsContent"
                name={t('newsContent')}
                required
                fullWidth
                id="NewsContent"
                label={t('newsContent')}
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
