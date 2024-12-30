export interface IInputCustomForm {
  label: string;
  name: string;
  id: string;
  type: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: () => void;
}
