import React from 'react';
import styles from '@/app/index';
import Link from 'next/link';
import Image from 'next/image';
import Success from '@/public/Success.png';
import Healthcare from '@/public/Healthcare.png';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], weight: '400', variable: '--font-raleway' });

const Portal = () => {
    return (
        <div className={styles.portalSection}>
            <div className={`${styles.portalContainer} ${raleway.variable} font-raleway`}>
                <div className={styles.portalContent}>
                    <Link className={styles.portalLink} href="/health">
                        <Image className={styles.portalImage} src={Healthcare} alt="Healthcare" width={460} height={460} />
                        <div className={styles.portalTitle}>Healthcare</div>
                    </Link>
                </div>
                <div className={styles.portalContent}>
                    <Link className={styles.portalLink} href="/success">
                        <Image className={styles.portalImage} src={Success} alt="Success" width={460} height={460} />
                        <div className={styles.portalTitle}>Success Stories</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Portal;
