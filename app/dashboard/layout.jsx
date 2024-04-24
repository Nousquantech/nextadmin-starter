import React from "react";
import { Sidebar, Footer, Navbar } from "../ui";
import styles from "../ui/dashboard/dashboard.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
