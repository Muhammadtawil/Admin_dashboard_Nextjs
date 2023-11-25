"use client";
import {useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
import Link from 'next/link';
import { useLocale } from "next-intl";
import { successAlert } from "../../alerts/alerts";
import { useRouter } from "next/navigation";



export default function RecoverForm({ sendCode, usersList }: { sendCode: any; usersList: any[] }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const locale = useLocale();



  return (
    <div className="user-area-all-style log-in-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-form-action">
              <div className="form-heading text-center">
                <h3 className="form-title">Please insert Your Email below</h3>
              </div>

              <form
                noValidate={false}
                action={async(formData) => {
                  const userEmail = formData.get('userEmail')
                  console.log(`user Email : ${userEmail}`)
  
                  console.log(`users Emails : ${usersList}`)

                  if (!usersList.includes(userEmail)) {
                    setError("Email is not a user");
                    return;
                  }
              
                  setLoading(true);
              
                  sendCode(userEmail)
                    .then(() => {
                      successAlert(`Code sent Successfully to ${userEmail}`);
                      router.push(`/${locale}/dashboard/login/recover/verify`);
                    })
                    .catch((error: any) => {
                      console.error(error);
                    })
                    .finally(() => {
                      setLoading(false);
                    });
                }}
              > <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="userEmail"
                        // value={formValues.userEmail}
                        // onChange={handleChange}
                        placeholder="Email"
                        required
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
                                       
                                          {loading ? "loading..." : "Send Code"}
                                        
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

  //     // const res = await signIn("credentials", {
  //     //   redirect: false,
  //     //   userName: formValues.userName,
  //     //   password: formValues.password,
  //     //   callbackUrl: "/en/main",
  //     // });

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
  



  // const [showPassword, setShowPassword] = useState(false);

  // const [formValues, setFormValues] = useState({
  //   userEmail: "",
  //   password: "",
// });
  




// const handleSendCode = (formData: any) => {
//   const { userEmail } = formData;

//   // Check if the userEmail is in the usersList
//   const userFound = usersList.find((user:any) => user.email === userEmail);

//   if (!userFound) {
//     setError("Email is not a user");
//     return;
//   }

//   setLoading(true);

//   sendCode(formData)
//     .then(() => {
//       successAlert(`Code sent Successfully`);
//       router.push(`/${locale}/dashboard/login/recover/verify`);
//     })
//     .catch((error: any) => {
//       console.error(error);
//     })
//     .finally(() => {
//       setLoading(false);
//     });
// };