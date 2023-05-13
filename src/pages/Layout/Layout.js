// import { Breadcrumb, Layout, Menu, theme } from "antd";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";

// import styles from "./layout.module.css";

// const LAYOUT = () => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
//     <Layout className="layout">
//       <Header />
//       <p>asdads</p>
//       <Footer />
//     </Layout>
//   );
// };
// export default LAYOUT;

import React, { Component } from "react";
import { Layout } from "antd";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import styles from "./layout.module.css";
import styled from "styled-components";

const LAYOUT = (props) => {
  const { className, children } = props;

  return (
    <div>
      <Header />
      <div className={styles.main_container}>{children}</div>
      <hr />
      <Footer />
    </div>
  );
};

export default LAYOUT;
