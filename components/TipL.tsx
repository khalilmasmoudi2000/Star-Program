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
            <div className={styles.tipContent}>
                <div className={styles.tipTitle}>
                    {title}
                </div>
                <div className={styles.tipDescription}>
                    {description}
                </div>
            </div>
            <Image src={image} alt="TipL" width={240} height={240} />
        </div>
    );
};

export default TipL;
