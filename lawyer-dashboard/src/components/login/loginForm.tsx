"use client";
import Link from "next/link";
import React from "react";
import { LoginAlert, successAlert } from "../alerts/alerts";
import { redirect, useRouter } from "next/navigation";

export default function LoginForm({
  onLogin,
  userName,
}: {
  onLogin: any;
  userName: any;
}) {
  return (
    <div className="user-area-all-style log-in-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-form-action">
              <div className="form-heading text-center">
                <h3 className="form-title">Login to your account!</h3>
              </div>

              <form
                action={async (formData) => {
                  await onLogin(formData);
                  await LoginAlert(userName);
                  //   const router = useRouter();
                  //   router.replace("/tasks");
                  redirect("/tasks");
                }}
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="userName"
                        placeholder="Username or Email"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="userPassword"
                        placeholder="Password"
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

                  <div className="col-lg-6 col-sm-6">
                    <Link href="/recover" className="forget">
                      Forgot my password?
                    </Link>
                  </div>

                  <div className="col-12">
                    <button className="default-btn btn-two" type="submit">
                      Log In Now
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
