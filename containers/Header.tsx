"use client";
import React from 'react';
import styles from '@/app/index';
import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from "react-simple-typewriter";
import SPImage from '@/public/SPImage.png';
import { Exo_2, Inter } from 'next/font/google';

const exo2 = Exo_2({ subsets: ['latin'], weight: '400', variable: '--font-exo2' })
const inter = Inter({ subsets: ['latin'], weight: '400', variable: '--font-inter' })
const Header = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.heroContent}>
                <div className={styles.heroTextContainer}>
                    <div className={`${styles.heroTitle} ${inter.variable} font-inter`}>
                        <Typewriter
                            cursor
                            cursorBlinking
                            delaySpeed={1000}
                            deleteSpeed={25}
                            loop={0}
                            typeSpeed={100}
                            words={['Inspiring Women', 'Shaping Futures', 'Igniting Change', 'Nurturing Talents']}
                        />
                    </div>
                    <div className={styles.heroDescription}>
                        “The beautiful thing about learning is that no one can take it away from you.”
                    </div>
                    <div className={styles.heroDescription}>
                        B.B. King
                    </div>
                </div>
                <div>
                    <Link href="/contact" className={`${inter.variable} font-inter`}>
                        <button className={`${styles.heroButton} ${inter.variable} font-inter`}>
                            Join Us
                        </button>
                    </Link>
                </div>
            </div>
            <div className={styles.heroPicture}>
                <Image src={SPImage} alt="SPImage" width={600} height={600} />
            </div>
        </div>
    );
};

export default Header;
