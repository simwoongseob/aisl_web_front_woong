import React from "react";
import styles from "./pagetitle.module.css";

const PageTitle = (props) => {
  return (
    <div>
      <h1 className={styles.page_title}>{props.title}</h1>
    </div>
  );
};
export default PageTitle;
