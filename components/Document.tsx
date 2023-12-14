"use client";
import React, {MouseEventHandler} from 'react';
import styles from '@/app/index';
import Link from 'next/link';
import { GrLinkNext } from "react-icons/gr";

type Course = {
    id: number;
    title: string;
    url: string;
};

type DocumentProps = {
    course: Course;
};

const Document: React.FC<DocumentProps> = ({ course }) => {

    return (
        <Link href={`${course.url}`} className={styles.documentContainer}>
            <embed className={styles.documentContent} src={course.url} />
            <div className={styles.documentTitle}>
                {course.title}
                <GrLinkNext />
            </div>
        </Link>
    );
};

export default Document;
