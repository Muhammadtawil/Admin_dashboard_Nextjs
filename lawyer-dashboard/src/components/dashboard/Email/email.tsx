

import SendEmail from "@/server/email/email";
import { revalidatePath } from "next/cache";
import EmailLists from "./EmailLists";
import { GetSubscribers } from "@/server/subscribers/subscribers";



async function OnSendEmail(formData: FormData,content:any) {
  "use server";
    try {

    await SendEmail(formData,content);
    revalidatePath("/email", "page");
  } catch (error) {}
}



export default  async function EmailComponent() {
const subscribersEmails=await GetSubscribers()
 
  return (
    <>
          <EmailLists sendEmail={OnSendEmail } subscribersEmail={subscribersEmails} />
    </> 
  );
}
