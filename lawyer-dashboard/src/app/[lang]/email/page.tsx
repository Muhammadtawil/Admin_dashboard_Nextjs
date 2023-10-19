import Grid from "@mui/material/Grid";
import PageTitle from "../../../components/shared/PageTitle/pageTitle";
import EmailLists from "../../../components/Email/EmailLists";
import LeftSidebar from "../../../components/Email/LeftSidebar";



export default function Inbox() {
  return (
    <>
      {/* Page title */}
      <PageTitle title="Email" />

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={4} lg={4} xl={3}>
          <LeftSidebar />
        </Grid>

        <Grid item xs={12} md={8} lg={8} xl={9}>
          <EmailLists />
        </Grid>
      </Grid>
    </>
  );
}
