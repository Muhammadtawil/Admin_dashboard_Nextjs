import { GetUsers, GetUsersEmails, SendResetCode } from "@/server/users/users";
import RecoverForm from "./recover_form";

async function SendCode(email: string) {
    "use server";
    try {
      await SendResetCode(email);
   
    } catch (error) {
        console.log(error)
    }
}
  
export default async function Recover() {
    const users= await GetUsersEmails()
  return (
      <RecoverForm sendCode={SendCode} usersList={users} />
  )
}
