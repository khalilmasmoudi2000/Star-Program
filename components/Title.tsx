import React from 'react';
import styles from '@/app/index';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: '400', variable: '--font-inter' })

interface ServiceProps {
    title: string;
}

const Title = ({title}: ServiceProps) => {
    return (
        <div className={styles.titleSection}>
            <div className={`${styles.titleContainer} ${inter.variable} font-inter`}>
                {title}
            </div>
        </div>
    );
};

export default Title;
