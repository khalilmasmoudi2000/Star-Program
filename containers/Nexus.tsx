import React from 'react';
import styles from '@/app/index';
import Link from 'next/link';
import Image from 'next/image';
import Literacy from '@/public/Literacy.png';
import Entrepreneurship from '@/public/Entrepreneurship.png';
import Engineer from '@/public/Engineer.png';

const Nexus = () => {
    return (
        <div className={styles.nexusContainer}>
            <div className={styles.nexusContent}>
                <div className={`${styles.nexusStatic} ${styles.nexusOne}`} />
                <Link href="/entrepreneurship" className="relative group">
                    <Image src={Entrepreneurship} alt="Entrepreneurship" className={`${styles.nexusImage}`} width={320} height={320} />
                    <div className={styles.nexusHover}>
                        <div className={styles.nexusTitle}>Entrepreneurship</div>
                    </div>
                </Link>
            </div>
            <div className={styles.nexusContent}>
                <div className={`${styles.nexusStatic} ${styles.nexusTwo}`} />
                <Link href="/engineering" className="relative group">
                    <Image src={Engineer} alt="Engineering" className={`${styles.nexusImage}`} width={320} height={320} />
                    <div className={styles.nexusHover}>
                        <div className={styles.nexusTitle}>Engineering</div>
                    </div>
                </Link>
            </div>
            <div className={styles.nexusContent}>
                <div className={`${styles.nexusStatic} ${styles.nexusThree}`} />
                <Link href="/literacy" className="relative group">
                    <Image src={Literacy} alt="Literacy" className={`${styles.nexusImage}`} width={320} height={320} />
                    <div className={styles.nexusHover}>
                        <div className={styles.nexusTitle}>Literacy Education</div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Nexus;
