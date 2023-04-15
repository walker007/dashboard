import  { ReactNode } from "react";
import styles from "./styles.module.css";

interface FromGroupProps{
    children: ReactNode[] | ReactNode;
}

export const FormGroup: React.FC<FromGroupProps> = ({children}) => {

    return (
        <div className={styles.formGroup}>{children}</div>
    );
}