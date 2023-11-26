"use client";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import React, { ChangeEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { IconButton, TextField } from "@mui/material";
import { useLocale } from "next-intl";
import { successAlert } from "../../alerts/alerts";


export default function ChangePassowrdComponent({onSubmit}:{onSubmit:any}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const temporaryOTP = localStorage.getItem('temporaryOTP');
  const otp = temporaryOTP;
  const [formValues, setFormValues] = useState({

    password: "",
    secondPassword: "",

  });
  const [error, setError] = useState("");
const locale=useLocale()



  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Password validation regex
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    setFormValues({ ...formValues, [name]: value });

    if ((name === "password" || name === "secondPassword" ) && !passwordRegex.test(value)) {
      setError(
        "Password must contain at least 8 characters, one letter, one number, and one special character."
      )
    }else if (name === "secondPassword" && value !== formValues.password) {
      setError("Passwords do not match.");
    }else {
      setError("");
    }
  };
  return (
    <div className="user-area-all-style log-in-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-form-action">
              <div className="form-heading text-center">
                <h3 className="form-title">Enter New Password</h3>
              </div>

              <form noValidate={false}     action={async(formData) => {
                  const userPassword = formData.get('password')
             
const temporaryOTP = localStorage.getItem('temporaryOTP');
              
                  setLoading(true);
              
              await   onSubmit(userPassword,temporaryOTP)
                    .then(() => {
                      successAlert(`Password reset Successfuly`);
                      router.push(`/${locale}/dashboard/login`);
                    })
                    .catch((error: any) => {
                      console.error(error);
                    })
                    .finally(() => {
                      setLoading(false);
                    });
                }}>
                <div className="row">
                <div className="col-12">
                    <div className="form-group">
                      <TextField
                        type={showPassword ? "text" : "password"}
                        value={formValues.password}
                        onChange={handleChange}
                        name="password"
                        label="Password"
                        placeholder="Password"
                        id="password"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                color="primary"
                              >
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <TextField
                        id="password2"
                        
                        type={showPassword ? "text" : "password"}
                        value={formValues.secondPassword}
                        onChange={handleChange}
                        name="secondPassword"
                        label="Re enter your password"
                        placeholder="Password"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                color="primary"
                              >
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                  </div>

      
                  {error && (
                    <div className="col-12">
                      <p className="text-danger">{error}</p>
                    </div>
                  )}
        

                  <div className="col-12">
                    <button
                      className="default-btn btn-two"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "loading..." : "Log In Now"}
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