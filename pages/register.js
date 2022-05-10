import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import TestimoinalSlider from "../src/components/Slider/TestimonialSlider";
import { useAuth } from "../src/Hooks/useAuth/useAuth";
import { useRoutes } from "../src/Hooks/useRoutes/useRoutes";
import Layout from "../src/layouts/Layout";

const Register = () => {
  // protecting register page from logged in user
  const { state: user } = useAuth();
  useRoutes(!user, "/register", "/dashboard");
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

export default Register;
