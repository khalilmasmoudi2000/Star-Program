import React from 'react';
import styles from '@/app/index';
import Image, { StaticImageData } from "next/image";

type TipProps = {
    image: StaticImageData;
    title: string;
    description: string;
};

const TipL: React.FC<TipProps> = ({ image, title, description}) => {
    return (
        <div className={styles.tipContainer}>
            <div className={`${styles.tipContent} bg-gradient-to-l from-light-pink to-transparent`}>
                <div className={styles.tipTitle}>
                    {title}
                </div>
                <div className={styles.tipDescription}>
                    {description}
                </div>
            </div>
            <Image src={image} alt="TipL" className={styles.tipPicture} width={320} height={320} />
        </div>
    );
};

export default TipL;
