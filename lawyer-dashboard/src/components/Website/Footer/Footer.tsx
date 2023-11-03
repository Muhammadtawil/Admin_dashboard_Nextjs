import React from "react";
import Link from "next/link";

const Footer = () => {
  async function Subscribe(data: FormData) {
    "use server";
    const subscriberUrl = process.env.SUBSCRIBERS_URL;
    const subscriberEmail = data.get("subscriberEmail");
    const subscriber = {
      subscriberEmail,
    };

    // Convert the client data to JSON
    const jsonData = JSON.stringify(subscriber);

    // Define the URL for adding a client (replace with the correct endpoint)
    const apiUrl = ` ${subscriberUrl}`; // Replace with the correct endpoint for adding a client

    // Define the token
    const token = process.env.TOKEN;

    // Define the request options
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the request headers
        "Content-Type": "application/json",
      },
      body: jsonData,
    };

    try {
      // Send the POST request to add the client
      const response = await fetch(apiUrl, requestOptions);

      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }

      const responseData = await response.json();
      console.log("Client added successfully:", responseData);
    } catch (error) {
      console.error("Error adding client:", error);
      // Handle the error here
    }
  }

  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-top-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <Link href="/" className="logo">
                  {/* <img src="/images/white-logo.png" alt="Image" /> */}
                </Link>

                <p>
                  Lorem ipsum dolor sit Lorem, consectetur Lorem Lorem. Lorem
                  Lorem Lorem sit Lorem sed Lorem Lorem minus Lorem dolores
                  dicta.
                </p>

                <ul className="social-icon">
                  <li>
                    <Link href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
              <Link className="navbar-brand" href="index.html">
                <h1 className="m-0 text-white">
                  <i className="me-2"></i>Subscribe{" "}
                </h1>
              </Link>
              <p className="mt-3 mb-4">
                Subscribe Now to get all latest news and blogs
              </p>
              <form action={Subscribe}>
                <div className="input-group">
                  <input
                    className="form-control border-white p-3"
                    type="email"
                    placeholder="Your Email"
                    name="subscriberEmail"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  />
                  <button className="btn btn-dark">subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-shape">
          <img src="/images/shape/footer-shape-one.png" alt="Image" />
          <img src="/images/shape/footer-shape-two.png" alt="Image" />
        </div>
      </footer>

      {/* Footer Bottom Area   */}
      <footer className="footer-bottom-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="copy-right">
                <p>Copyright &copy; 2023 . All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
