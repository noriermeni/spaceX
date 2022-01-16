import React from "react";
import styles from "./pageWrapper.module.scss";
import Container from '@mui/material/Container';

interface Props {
    children: React.ReactNode;
}

export default function PageWrapper({children}: Props) {
    return <main>
        <Container maxWidth="lg" className={styles.container}>
            {children}
        </Container>
    </main>
}