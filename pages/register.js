import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Register = () => {
  return (
    <Layout header={2}>
      <PageBanner title={"Create Account"} pageName={"Listing"} />
      <section className="fioxen-add-listing pt-120 pb-120">
        <div className="container">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="add-listing-form general-listing-form mb-60 wow fadeInUp">
                  <h4 className="title">General Information</h4>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="First Name"
                          name="name"
                          required=""
                        />
                      </div>
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Last Name"
                          name="name"
                          required=""
                        />
                      </div>
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="name"
                          required=""
                        />
                      </div>
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Business Name"
                          name="name"
                          required=""
                        />
                      </div>
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Website"
                          name="name"
                          required=""
                        />
                      </div>
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Phone Number"
                          name="name"
                          required=""
                        />
                      </div>
                      <div className="form_group">
                        <select className="wide">
                          <option selected disabled value={"Category"}>
                            Select Country
                          </option>
                          <option value={1}>United Kingdom</option>
                          <option value={2}>Canada</option>
                          <option value={3}>United States of America</option>
                          <option value={4}>Australia</option>
                          <option value={5}>Poland</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button text-center">
                  <button className="main-btn icon-btn">Create Account</button>
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
