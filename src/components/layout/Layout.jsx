import { React, useEffect } from "react";
import { Helmet } from "react-helmet";

import Footer from "../common/footers/footer";
import { stickyHeaderHandler } from "../../utils";
import MobileFooter from "../common/footers/MobileFooter";
export default function Layout(props) {
  useEffect(() => {
    stickyHeaderHandler();
    window.addEventListener("scroll", stickyHeaderHandler, true);
    return () => {
      window.removeEventListener("scroll", stickyHeaderHandler);
    };
  }, []);
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" sizes="16x16" href="#" />
        <link rel="icon" type="image/png" sizes="32x32" href="#" />
      </Helmet>
      {props.children}
      <Footer />
      <MobileFooter />
    </>
  );
}
