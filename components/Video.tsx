import React from 'react';
import styles from '@/app/index';

type Course = {
    id: number;
    title: string;
    url: string;
};

type VideoProps = {
    course: Course;
};

const Video: React.FC<VideoProps> = ({ course }) => {
    return (
        <div className={styles.videoContainer}>
            <div>
                <iframe
                    className={styles.videoContent}
                    src={course.url}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
            <div className={styles.videoTitle}>{course.title}</div>
        </div>
    );
};

export default Video;
