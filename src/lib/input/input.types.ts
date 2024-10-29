import { IButtonProps } from "../button/button.types";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  position?: "left" | "right";
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  fullWidth?: boolean;
  submitProps?: {
    display?: boolean;
  } & IButtonProps;
}
