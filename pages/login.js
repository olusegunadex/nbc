<<<<<<< HEAD
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Register = () => {
  return (
    <Layout header={2}>
      <PageBanner title={"Sign In"} pageName={"Listing"} />
      <section className="fioxen-add-listing pt-120 pb-120">
        <div className="container">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="add-listing-form general-listing-form mb-60 wow fadeInUp">
                  <h4 className="title">Sign in to an existing account</h4>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Email Address"
                          name="name"
                          required=""
                        />
                      </div>
                      <div className="form_group">
                        <input
                          type="password"
                          className="form_control"
                          placeholder="Password"
                          name="name"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button text-center">
                  <button className="main-btn icon-btn">Login Account</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};
export default Register;
=======
import Link from "next/link";
import React, { useEffect } from "react";
import PageBanner from "../src/components/PageBanner";
import TestimoinalSlider from "../src/components/Slider/TestimonialSlider";
import { useAuth } from "../src/Hooks/useAuth/useAuth";
import { useRoutes } from "../src/Hooks/useRoutes/useRoutes";
import Layout from "../src/layouts/Layout";

const Login = () => {
  // protecting register page from logged in user
  return (
    <Layout header={2}>
      <div>
        <p>Email Address</p>
        <input type="email" placeholder="johndoe@abc.com" />
        <p>Password</p>
        <input type="password" placeholder="password" />
        <button>Register</button>
      </div>
    </Layout>
  );
};

export default Login;
>>>>>>> 012391f55455a08edb894e3db228d353c14705c2
