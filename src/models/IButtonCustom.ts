export interface IButtonCustom {
    label: string;
    type: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled: boolean;
    className: string;
}