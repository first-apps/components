import React from "react";
// import styles from "./app.module.css";
import "./index.css";
import { Button, Input, NavItem } from "../lib";
import { Navbar } from "src/lib/navbar";
import { Container } from "src/lib/container";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";

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
      <Input
        fullWidth
        icon={<MagnifyingGlassIcon className="twcss-size-6" />}
        submitProps={{ display: true }}
      />
    </Container>
  );
}

export default App;
