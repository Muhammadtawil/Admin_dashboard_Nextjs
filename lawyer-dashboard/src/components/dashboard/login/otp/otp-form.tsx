"use client";
import Link from "next/link";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import React, { ChangeEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { IconButton, TextField } from "@mui/material";
import { MuiOtpInput } from 'mui-one-time-password-input'
import { useLocale } from "next-intl";
import { successAlert } from "../../alerts/alerts";



export default function VerifyCode({tokensList}:{tokensList:any[]}) {
    const [otp, setOtp] =useState('')
    const locale = useLocale();
    const handleOtpChange = (newValue:any) => {
      setOtp(newValue)
    }
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();
  



  return (
    <div className="user-area-all-style log-in-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-form-action">
              <div className="form-heading text-center">
                <h3 className="form-title">Please Insert the code sent to the email</h3>
              </div>

              <form noValidate={false}  action={async(formData) => {
                
                  console.log(`user Email : ${otp}`)
  
                  console.log(`users Tokens : ${tokensList}`)

                  if (tokensList.includes(otp)) {
                    setLoading(true);
                    successAlert(`Password is successfully reset`);
                    localStorage.setItem('temporaryOTP', otp); 
    
                    router.push(`/${locale}/dashboard/login/recover/changepassword`);
                  } else {
                    setError("Code is not  Valid");
                    return;
                  }
              
                
                 
                }}>
                <div className="row">
                  <div className="col-12">
                  <MuiOtpInput value={otp} onChange={handleOtpChange} />

                  </div>
                
                  {error && (
                    <div className="col-12">
                      <p className="text-danger">{error}</p>
                    </div>
                  )}
            

                  <div className="col-12">
                    <button
                      className="default-btn btn-two"
                    //   type="submit"
                      disabled={loading}
                    >
                                 
                                          {loading ? "loading..." : "Verify"}
                                       
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

  // const router = useRouter();
  // const [showPassword, setShowPassword] = useState(false);

  // const [formValues, setFormValues] = useState({
  //   userName: "",
  //   password: "",
  // });

  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl") || "/en/main";

  // const onSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     setLoading(true);
  //     setFormValues({ userName: "", password: "" });

  //     const res = await signIn("credentials", {
  //       redirect: false,
  //       userName: formValues.userName,
  //       password: formValues.password,
  //       callbackUrl: "/en/main",
  //     });

  //     setLoading(false);

  //     console.log(res);
  //     if (!res?.error) {
  //       // redirect("/main");
  //       router.replace(callbackUrl);
  //     } else {
  //       setError("invalid email or password");
  //     }
  //   } catch (error: any) {
  //     setLoading(false);
  //     setError(error);
  //   }
  // };

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };
