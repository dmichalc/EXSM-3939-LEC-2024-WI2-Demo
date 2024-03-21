"use client";
import styles from "./page.module.css";
import React from "react";
import HelloWorld from "./HelloWorld";
import SimpleInput from "./SimpleInput";
import {useState} from 'react';
export default function HomePage() {
  const [showFields, setShowFields] = useState(true);
  return (
    <>
    <main className={styles.main}>
      <HelloWorld />
      <p>this is some text</p>
    </main>
    <footer>
      {showFields ? <SimpleInput /> : null}
      <button onClick={() => { setShowFields(false) }}>Remove</button>
    </footer>

    </>
  );
}
