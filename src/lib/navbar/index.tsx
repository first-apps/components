import { useState } from "react";
import globalStyles from "../index.module.css";
import styles from "./navbar.module.css";
import { INavbarProps } from "./navbar.types";

export const Navbar: React.FC<INavbarProps> = (props) => {
  const { children, row, column, alignCenter, className } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={styles["navigation-trigger"]}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? "Close" : "Open"}
      </div>
      <ul
        role="navigation"
        {...props}
        className={[
          styles.navbar,
          row && globalStyles["flex-row"],
          column && globalStyles["flex-column"],
          alignCenter && globalStyles["align-center"],
          open && styles.open,
          className,
        ]
          .filter((el) => el)
          .join(" ")}
      >
        <div
          className={styles["navigation-trigger"]}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "Close" : "Open"}
        </div>
        {children}
      </ul>
    </>
  );
};
