import React from 'react';
import styles from '@/app/index';
import { Grade } from '../components';
import Grade6 from '@/public/Grade6.png';
import Grade9 from '@/public/Grade9.png';
import Grade11 from '@/public/Grade11.png';

const Grades = () => {
    return (
        <div className={styles.gradesContainer}>
            <Grade image={Grade6} title="6th Grade Courses" path="/sixth" />
            <Grade image={Grade9} title="9th Grade Courses" path="/ninth" />
            <Grade image={Grade11} title="11th Grade Courses" path="/eleventh" />
        </div>
    );
};

export default Grades;
