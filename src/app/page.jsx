"use client";
import styles from "./page.module.css";
import React from "react";
import StatefulInput from "./StatefulInput";
import FetchUsers from "./FetchUsers";
export default function Home() {
  return (
    <main className={styles.main}>
      <FetchUsers />
      <StatefulInput />
    </main>
  );
}
