"use client";
interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: () => void;
  sx?: string;
}

const Button = (props: IButtonProps) => {
  return (
    <button
      className={`custom-btn ${props.sx}`}
      {...props}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
