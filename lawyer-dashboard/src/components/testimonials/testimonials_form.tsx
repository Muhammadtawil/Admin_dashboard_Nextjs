"use client";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { updateTaskAlert } from "../alerts/alerts";
import CustomTypography from "../shared/formsComponents";

export default function TestimonialAddComponent({
  onCreate,
}: {
  onCreate: any;
}) {
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
          noValidate
          action={async (formData) => {
            await onCreate(formData);
            updateTaskAlert();
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
              Create Testimonial
            </Button>
          </Grid>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={"Sender Name"} />
              <TextField
                autoComplete="senderName"
                name="senderName"
                required
                fullWidth
                id="senderName"
                label="Sender Name"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={"Testimonial Content"} />
              <TextField
                multiline
                minRows={3}
                autoComplete="testimonialContent"
                name="testimonialContent"
                required
                fullWidth
                id="testimonialContent"
                label="Testimonial Content"
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
