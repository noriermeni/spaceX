import React from "react";
import styles from './pageTitle.module.scss';
import {TitleSizeType} from "../../enums/TitleSize/titleSize.type";

interface Props {
    title: string;
    description?: string;
    size?: TitleSizeType;
}

export default function PageTitle({title, size = TitleSizeType.lg, description}: Props) {
    return <div className={styles.container}>
        {size === TitleSizeType.lg && <h1>{title}</h1>}
        {size === TitleSizeType.md && <h2>{title}</h2>}
        {size === TitleSizeType.sm && <h3>{title}</h3>}
        {description && <p>{description}</p>}
    </div>
}