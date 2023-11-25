import { GetUsersTokens } from "@/server/users/users"
import VerifyCode from "./otp-form"


export default async function VerifyResetCode() {
    const tokens = await GetUsersTokens()
  return (
    <VerifyCode tokensList={tokens}/>
  )
}
