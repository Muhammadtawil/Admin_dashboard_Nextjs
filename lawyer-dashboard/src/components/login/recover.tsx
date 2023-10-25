"use client";
import React, { ChangeEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from 'next/link';


export default function RecoverForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formValues, setFormValues] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/en/main";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormValues({ userName: "", password: "" });

      const res = await signIn("credentials", {
        redirect: false,
        userName: formValues.userName,
        password: formValues.password,
        callbackUrl: "/en/main",
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
                <h3 className="form-title">Please insert Your Email below</h3>
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
                        placeholder="Email"
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
                    //   type="submit"
                      disabled={loading}
                    >
                                          <Link href={'/en/login/recover/verify'}>
                                          {loading ? "loading..." : "Send Code"}
                                          </Link>
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

