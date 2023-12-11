import React from 'react';
import styles from '@/app/index';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'], weight: '400', variable: '--font-inter' })
interface ServiceProps {
    title: string;
    subtitle: string;
}

const Label: React.FC<ServiceProps> = ({title, subtitle}) => {
    return (
        <div className={styles.labelContainer}>
            <div className={`${styles.labelTitle} ${inter.variable} font-inter`}>{title}</div>
            <div className={styles.labelSubtitle}>{subtitle}</div>
        </div>
    );
};

export default Label;
