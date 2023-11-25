import { UpdatePassword } from "@/server/users/users";
import ChangePassowrdComponent from "./change-Password";



async function Submit(password: string,temporaryOTP:any) {

    "use server";
    try {
      await UpdatePassword(password,temporaryOTP);
    
    } catch (error) {}
  }
  

export default function ResetPassword() {
  return (
    <ChangePassowrdComponent onSubmit={Submit}/>
  )
}
