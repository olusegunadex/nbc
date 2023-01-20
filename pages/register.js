import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import TestimoinalSlider from "../src/components/Slider/TestimonialSlider";
import Layout from "../src/layouts/Layout";

const Register = () => {
  return (
    <Layout>
      <div>
        <p>Email Address</p>
        <input type='email' placeholder='johndoe@abc.com' />
        <p>Password</p>
        <input type='password' placeholder='password' />
        <button>Register</button>
      </div>
    </Layout>
  );
};

export default Register;
