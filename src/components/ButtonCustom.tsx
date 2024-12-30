import { IButtonCustom } from "../models/IButtonCustom";

const ButtonCustom = ({
  label,
  type,
  onClick,
  disabled,
  className,
}: IButtonCustom) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {label}
    </button>
  );
};

export default ButtonCustom;
