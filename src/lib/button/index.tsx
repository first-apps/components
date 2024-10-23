import React from "react";
import styles from "./button.module.css";
import { IButtonProps } from "./button.types";

export const Button: React.FC<IButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
