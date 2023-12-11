import React from 'react';
import styles from '@/app/index';
import Link from 'next/link';
import Image from 'next/image';
import Business from '@/public/Business.png';
import Health from '@/public/Health.png';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], weight: '400', variable: '--font-raleway' });

const Portal = () => {
    return (
        <div className={styles.portalSection}>
            <div className={`${styles.portalContainer} ${raleway.variable} font-raleway`}>
                <Link className={styles.portalLink} href="/health">
                    <Image src={Health} alt="Health" width={240} height={240} />
                    <div>Health Tips</div>
                </Link>
                <Link className={styles.portalLink} href="/success">
                    <Image src={Business} alt="Business" width={240} height={240} />
                    <div>Success Stories</div>
                </Link>
            </div>
        </div>
    );
};

export default Portal;
