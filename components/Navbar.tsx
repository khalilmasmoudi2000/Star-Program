"use client";
import React from "react";
import styles from '@/app/index';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { navVariants } from "@/utils/motion";
import SPLogo from '@/public/SPLogo.png';

const Navbar = () => {
    const currentRoute = usePathname();
    console.log(currentRoute);

    return (
        <div className={styles.navContainer}>
            <div className="absolute inset-0 nav-gradient z-0" />
            <div className={`${styles.innerWidth} text-exo2 mx-auto px-12 py-2 flex justify-between items-center select-none`}>
                <div>
                    <Link href="/" className={styles.navLogo}>
                        <Image src={SPLogo} alt="MFIcon" width={140} height={140} className="flex justify-center object-contain z-10 hover:scale-105 hover:drop-shadow-nav-logo-select-shadow" />
                    </Link>
                </div>
                <div className="flex gap-8">
                    <Link href="/" className={`${styles.navText} ${currentRoute === "/" ? "from-dark-purple to-light-pink bg-gradient-to-b bg-clip-text text-transparent after:content-[\'\'] after:bg-gradient-to-r from-dark-pink to-transparent after:h-[2px] after:w-[30%] after:left-0 after:absolute after:-bottom-[10px] before:content-[\'\'] before:bg-gradient-to-l from-dark-pink to-transparent before:h-[2px] before:w-[30%] before:right-0 before:absolute before:-top-[5px]" : ""} relative nav-link `}>
                        Home
                    </Link>
                    <Link href="/courses" className={`${styles.navText} ${currentRoute === "/courses" ? "from-dark-purple to-light-pink bg-gradient-to-b bg-clip-text text-transparent after:content-[\'\'] after:bg-gradient-to-r from-nav-select-color to-transparent after:h-[2px] after:w-[30%] after:left-0 after:absolute after:-bottom-[10px] before:content-[\'\'] before:bg-gradient-to-l from-nav-select-color to-transparent before:h-[2px] before:w-[30%] before:right-0 before:absolute before:-top-[5px]" : ""} relative group`}>
                        Courses
                    </Link>
                    <Link href="/arts" className={`${styles.navText} ${currentRoute === "/arts" ? "from-dark-purple to-light-pink bg-gradient-to-b bg-clip-text text-transparent after:content-[\'\'] after:bg-gradient-to-r from-nav-select-color to-transparent after:h-[2px] after:w-[30%] after:left-0 after:absolute after:-bottom-[10px] before:content-[\'\'] before:bg-gradient-to-l from-nav-select-color to-transparent before:h-[2px] before:w-[30%] before:right-0 before:absolute before:-top-[5px]" : ""} relative group`}>
                        Arts
                    </Link>
                    <Link href="/empowerment" className={`${styles.navText} ${currentRoute === "/empowerment" ? "from-dark-purple to-light-pink bg-gradient-to-b bg-clip-text text-transparent after:content-[\'\'] after:bg-gradient-to-r from-nav-select-color to-transparent after:h-[2px] after:w-[30%] after:left-0 after:absolute after:-bottom-[10px] before:content-[\'\'] before:bg-gradient-to-l from-nav-select-color to-transparent before:h-[2px] before:w-[30%] before:right-0 before:absolute before:-top-[5px]" : ""} relative group`}>
                        Empowerment
                    </Link>
                    <Link href="/inspiration" className={`${styles.navText} ${currentRoute === "/inspiration" ? "from-dark-purple to-light-pink bg-gradient-to-b bg-clip-text text-transparent after:content-[\'\'] after:bg-gradient-to-r from-nav-select-color to-transparent after:h-[2px] after:w-[30%] after:left-0 after:absolute after:-bottom-[10px] before:content-[\'\'] before:bg-gradient-to-l from-nav-select-color to-transparent before:h-[2px] before:w-[30%] before:right-0 before:absolute before:-top-[5px]" : ""} relative group`}>
                        Inspiration
                    </Link>
                    <Link href="/games" className={`${styles.navText} ${currentRoute === "/games" ? "from-dark-purple to-light-pink bg-gradient-to-b bg-clip-text text-transparent after:content-[\'\'] after:bg-gradient-to-r from-nav-select-color to-transparent after:h-[2px] after:w-[30%] after:left-0 after:absolute after:-bottom-[10px] before:content-[\'\'] before:bg-gradient-to-l from-nav-select-color to-transparent before:h-[2px] before:w-[30%] before:right-0 before:absolute before:-top-[5px]" : ""} relative group`}>
                        Games
                    </Link>
                    <Link href="/contact" className={`${currentRoute === "/contact" ? "text-nav-select-color after:content-[\'\'] after:bg-gradient-to-r from-nav-select-color to-transparent after:h-[2px] after:w-[30%] after:left-0 after:absolute after:-bottom-[10px] before:content-[\'\'] before:bg-gradient-to-l from-nav-select-color to-transparent before:h-[2px] before:w-[30%] before:right-0 before:absolute before:-top-[5px]" : ""} relative group`}>
                        <button className={styles.navButton}>
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Navbar;
