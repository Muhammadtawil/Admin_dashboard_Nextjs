"use client";
import Link from "next/link";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";

import React, { ChangeEvent, useState } from "react";
import { LoginAlert, successAlert } from "../alerts/alerts";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import ToDo from "@/app/tasks/page";
import { IconButton, TextField } from "@mui/material";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formValues, setFormValues] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/main";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormValues({ userName: "", password: "" });

      const res = await signIn("credentials", {
        redirect: false,
        userName: formValues.userName,
        password: formValues.password,
        callbackUrl: "/main",
      });

      setLoading(false);

      console.log(res);
      if (!res?.error) {
        // redirect("/main");
        router.replace(callbackUrl);
      } else {
        setError("invalid email or password");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="user-area-all-style log-in-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-form-action">
              <div className="form-heading text-center">
                <h3 className="form-title">Login to your account!</h3>
              </div>

              <form noValidate={false} onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="userName"
                        value={formValues.userName}
                        onChange={handleChange}
                        placeholder="Username or Email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <TextField
                        type={showPassword ? "text" : "password"}
                        value={formValues.password}
                        onChange={handleChange}
                        name="password"
                        label="Password"
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

                  <div className="col-lg-6 col-sm-6 form-condition">
                    <div className="agree-label">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                          Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  {error && (
                    <div className="col-12">
                      <p className="text-danger">{error}</p>
                    </div>
                  )}
                  <div className="col-lg-6 col-sm-6">
                    <Link href="/recover" className="forget">
                      Forgot my password?
                    </Link>
                  </div>

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

// action={async (formData) => {
//   await onLogin(formData);
// await LoginAlert(userName);
//   const router = useRouter();
//   router.replace("/tasks");

// }}
