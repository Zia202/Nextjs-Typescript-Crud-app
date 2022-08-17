import styles from "../styles/layout.module.css";
import React, { ReactNode } from "react";
export default function Layout({ children }: { children: ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
