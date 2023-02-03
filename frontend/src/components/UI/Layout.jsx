import React from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

const Layout = (props) => {
  return (
    <section className={props.className}>
      <Navbar />
      <main>
        {props.children}
      </main>
      <Footer />
    </section>
  );
};

export default Layout;
