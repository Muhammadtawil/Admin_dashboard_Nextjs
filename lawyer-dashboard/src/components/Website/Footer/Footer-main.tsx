
import { AddSubscribers } from "@/server/web/services/Subscribe/subscribe";
import FooterSection from "./Footer";

export default async function FooterMain() {
    async function subscribe(formData: FormData) {
        "use server";
        try {
          await AddSubscribers(formData);
   
        } catch (error) {}
      }
      
  return (
      <>
      <FooterSection Subscribe={subscribe} />
      </>
  )
}
