import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/components/PreLoader";
import { UserContextProvider } from "../src/Context/UserContext/UserContext";
import { useAuth } from "../src/Hooks/useAuth/useAuth";
import "../styles/globals.css";

const MyAppEntry = ({ Component, pageProps }) => {
  const { authData } = useAuth();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [loader]);
  return (
    <>
      {authData.authIsReady ? (
        <UserContextProvider>
          <Fragment>
            <Head>
              <title>Nigerian Business Abroad</title>
              <link
                rel="shortcut icon"
                href="assets/images/favicon.ico"
                type="image/png"
              />
              <link
                href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600&family=Quicksand:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
              />
            </Head>
            {loader && <PreLoader />}
            <Component {...pageProps} />
          </Fragment>
        </UserContextProvider>
      ) : (
        <PreLoader />
      )}
    </>
  );
};
export default MyAppEntry;
