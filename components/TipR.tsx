import React from 'react';
import styles from '@/app/index';
import Image, { StaticImageData } from "next/image";

type TipProps = {
    image: StaticImageData;
    title: string;
    description: string;
};

const TipR: React.FC<TipProps> = ({ image, title, description}) => {
    return (
        <div className={styles.tipContainer}>
            <Image src={image} alt="TipR" className={styles.tipPicture} width={320} height={320} />
            <div className={`${styles.tipContent} bg-gradient-to-r from-light-pink to-transparent`}>
                <div className={styles.tipTitle}>
                    {title}
                </div>
                <div className={styles.tipDescription}>
                    {description}
                </div>
            </div>
        </div>
    );
};

export default TipR;
