"use client";
import React, { useState } from 'react';
import styles from '@/app/index';
import { Sidebar, Grid, Pagination } from '@/components';

type Subject = {
    id: number;
    name: string;
    icon: JSX.Element;
};

type Course = {
    id: number;
    subject: string;
    type: string;
    title: string;
    url: string;
};

type CollectionProps = {
    subjects: Subject[];
    courses: Course[];
};

const Collection: React.FC<CollectionProps> = ({ subjects, courses }) => {
    const [selectedSubject, setSelectedSubject] = useState<Subject>(subjects[0]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const handleSubjectChange = (subject: Subject) => {
        setSelectedSubject(subject);
    };
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const filteredCourses = courses.filter((course) => course.subject === selectedSubject.name).slice((currentPage - 1) * 6, currentPage * 6);

    return (
        <div className={styles.collectionSection}>
            <div className={styles.collectionContainer}>
                <Sidebar subjects={subjects} selectedSubject={selectedSubject} onSelectSubject={handleSubjectChange} />
                <div className={styles.collectionContent}>
                    <div>
                        <Grid courses={filteredCourses} />
                    </div>
                    <div>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={Math.ceil(filteredCourses.length / 6)}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;
