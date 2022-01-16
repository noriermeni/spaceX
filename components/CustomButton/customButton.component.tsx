import React from "react";
import styles from './customButton.module.scss';

interface Props {
    title: string;

    handleClick(): void;
}

export default function CustomButton({handleClick, title}: Props) {
    return <button className={styles.customButton} onClick={handleClick}>
        <p>{title}</p>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
    </button>
}