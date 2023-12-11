import React, { useState } from 'react';
import styles from '@/app/index';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], weight: '400', variable: '--font-raleway' });

type Subject = {
    id: number;
    name: string;
    icon: JSX.Element;
};

type SidebarProps = {
    subjects: Subject[];
    selectedSubject: Subject;
    onSelectSubject: (subject: Subject) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ subjects, selectedSubject, onSelectSubject }) => {
    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.sidebarTitle}>Subjects</div>
            <div className={`${styles.sidebarContent} ${raleway.variable} font-raleway`}>
                {subjects.map((subject) => (
                    <button className={`px-4 py-2 flex items-center justify-start ${selectedSubject.id === subject.id ? 'bg-white text-dark-pink rounded-r-[24px]' : 'bg-[#FF81A5]'}`} key={subject.id} onClick={() => onSelectSubject(subject)}>
                        <div className={styles.sidebarIcon}>
                            {subject.icon}
                        </div>
                        <div className={styles.sidebarSubTitle}>{subject.name}</div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
