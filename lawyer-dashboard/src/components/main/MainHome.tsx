import { GetServices } from "@/server/services/services";
import ServiceClientChart from "./chart";
import { getClients } from "@/server/clients/clients";
import MainComponent from "./main";
import MonthlyClientChart from "./charttwo";
import { Box, Stack } from "@mui/material";
import RandomQuote from "./quotes/quotes";
import PageTitle from "@/components/shared/PageTitle/pageTitle";
import QuoteGenerator from "./quotes/Quote_generator";

export default async function MainHome() {
    const services = await GetServices();
const clients=await getClients()
  return (
      <>
          <MainComponent  />
          <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
            //   height="100vh"

          >
              <QuoteGenerator/>
              {/* <RandomQuote /> */}
              </Box>
     <h1>Statistics</h1>

  
              <ServiceClientChart servicesData={services} />
           
                   <Stack direction="row" spacing={2}>
          <MonthlyClientChart clientData={clients} />
          </Stack>
          
      </>
  )
}


