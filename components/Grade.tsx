import React from 'react';
import styles from '@/app/index';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import { GrLinkNext } from "react-icons/gr";

interface ServiceProps {
    image: StaticImageData;
    title: string;
    path: string;
}

const Grade: React.FC<ServiceProps> = ({ image, title, path }) => {
    return (
        <div className={styles.gradeContainer}>
            <div className={styles.gradeContent}>
                <Link href={path} >
                    <Image src={image} alt="Grade" className={styles.gradePicture} width={240} height={240} />
                    <div className={styles.gradeInfos}>
                        <div className={styles.gradeTitle}>
                            {title}
                        </div>
                        <div className={styles.gradeIcon}>
                            <GrLinkNext />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Grade;
