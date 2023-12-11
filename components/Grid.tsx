import React from 'react';
import styles from '@/app/index';
import { Document, Video } from '@/components';

type Course = {
    id: number;
    title: string;
    type: string;
    url: string;
};

type GridProps = {
    courses: Course[];
};

const Grid: React.FC<GridProps> = ({ courses }) => {
    return (
        <div className={`${styles.gridContainer} grid grid-cols-3`}>
            {courses.map((course) => (
                <div key={course.id}>
                    {course.type === 'Document' && <Document course={course} />}
                    {course.type === 'Video' && <Video course={course} />}
                </div>
            ))}
        </div>
    );
};

export default Grid;
