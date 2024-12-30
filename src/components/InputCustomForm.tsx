import { IInputCustomForm } from "../models/IInputCustomForm";
import styles from "../styles/InputCustom.module.css";

const InputCustomForm = ({
  label,
  name,
  id,
  type,
  defaultValue,
  placeholder = " ",
  onChange,
}: IInputCustomForm) => {
  return (
    <div className={styles.customFormGroup}>
      <input
        id={id}
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        className={styles.inputCustomForm}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default InputCustomForm;
