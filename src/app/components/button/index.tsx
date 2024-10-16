import styles from "./button.module.css";

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}
/**
 * A basic button component.
 * @example
 * <Button>Hello World!</Button>
 **/
export const Button: React.FC<IButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
