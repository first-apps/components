import React from "react";
// import styles from "./app.module.css";
import "./index.css";
import { Button, NavItem } from "../lib";
import { Navbar } from "src/lib/navbar";
import { Container } from "src/lib/container";

function App() {
  return (
    <Container alignCenter>
      <Navbar row alignCenter>
        <NavItem>Nav Item 1</NavItem>
        <NavItem>Nav Item 2</NavItem>
        <NavItem>Nav Item 3</NavItem>
      </Navbar>
      <p className="twcss-my-2">MF Components</p>
      <Button>Hello World!</Button>
    </Container>
  );
}

export default App;
