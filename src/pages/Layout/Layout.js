import React, { Component } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import styles from "./layout.module.css";
import { connect } from "react-redux";

const Layout = (props) => {
  const { className, children } = props;

  return (
    <div>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
