import { IInputProps } from "./input.types";
import globalStyles from "../index.module.css";
import styles from "./input.module.css";
import { Button } from "../button";

export const Input: React.FC<IInputProps> = (props) => {
  const {
    icon,
    position = "left",
    containerProps,
    submitProps,
    fullWidth,
    ...rest
  } = props;

  return (
    <div
      {...containerProps}
      className={[
        styles.container,
        fullWidth && globalStyles["full-width"],
        icon && position === "left" && styles.left,
        // TODO: make sure this overrides the previous class
        containerProps?.className,
      ]
        .filter((el) => el)
        .join(" ")}
    >
      {icon && position === "left" && icon}
      <input
        {...rest}
        className={[
          styles.input,
          icon && position === "right" && styles.right,
          rest.className,
        ]
          .filter((el) => el)
          .join(" ")}
      />
      {icon && position === "right" && icon}
      {submitProps?.display && (
        <Button
          {...submitProps}
          className={[
            styles.submit,
            icon && position === "right" && styles["submit-right"],
            submitProps.className,
          ]
            .filter((el) => el)
            .join(" ")}
          type="submit"
        >
          {submitProps.children || "Search"}
        </Button>
      )}
    </div>
  );
};
