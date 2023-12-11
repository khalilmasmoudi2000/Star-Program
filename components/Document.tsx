import React from 'react';
import styles from '@/app/index';

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
        <div className={styles.documentContainer}>
            <div>
                <embed className={styles.documentContent} src={course.url} />
            </div>
            <div className={styles.documentTitle}>{course.title}</div>
        </div>
    );
};

export default Document;
