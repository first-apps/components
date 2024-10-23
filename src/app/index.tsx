import React from "react";
import styles from "./app.module.css";
import "./index.css";
import { Button } from "../lib";

function App() {
  return (
    <>
      <p className="twcss-my-2">MF Components</p>
      <p className={styles.description}>Npm package / Module Federation</p>
      <Button>Hello World!</Button>
    </>
  );
}

export default App;
