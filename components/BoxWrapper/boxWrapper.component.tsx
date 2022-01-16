import React from "react";
import styles from "./boxWrapper.module.scss";

import PageTitle from "../PageTitle/pageTitle.component";
import {TitleSizeType} from "../../enums/TitleSize/titleSize.type";

interface Props {
    title?: string;
    children: React.ReactNode;
}

export default function BoxWrapper({title, children}: Props) {
    return <div className={styles.container}>
        {title && <PageTitle title={title} size={TitleSizeType.md}/>}
        {children}
    </div>
}