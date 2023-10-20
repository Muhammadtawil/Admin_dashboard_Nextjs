

import SendEmail from "@/server/email/email";
import { revalidatePath } from "next/cache";
import EmailLists from "./EmailLists";



async function OnSendEmail(formData: FormData,content:any) {
  "use server";
    try {

    await SendEmail(formData,content);
    revalidatePath("/email", "page");
  } catch (error) {}
}



export default  function EmailComponent() {

 
  return (
    <>
          <EmailLists sendEmail={OnSendEmail } />
    </> 
  );
}
