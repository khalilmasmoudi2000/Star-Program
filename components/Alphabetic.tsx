import React from 'react';
import styles from '@/app/index';

const Alphabetic = () => {
    return (
        <div className={styles.alphabeticContainer}>
            <div className={styles.alphabeticRow}>
                <button className={styles.alphabeticLetter}>A</button>
                <button className={styles.alphabeticLetter}>B</button>
                <button className={styles.alphabeticLetter}>C</button>
                <button className={styles.alphabeticLetter}>D</button>
                <button className={styles.alphabeticLetter}>E</button>
                <button className={styles.alphabeticLetter}>F</button>
            </div>
            <div className={styles.alphabeticRow}>
                <button className={styles.alphabeticLetter}>G</button>
                <button className={styles.alphabeticLetter}>H</button>
                <button className={styles.alphabeticLetter}>I</button>
                <button className={styles.alphabeticLetter}>J</button>
                <button className={styles.alphabeticLetter}>K</button>
                <button className={styles.alphabeticLetter}>L</button>
            </div>
            <div className={styles.alphabeticRow}>
                <button className={styles.alphabeticLetter}>M</button>
                <button className={styles.alphabeticLetter}>N</button>
                <button className={styles.alphabeticLetter}>O</button>
                <button className={styles.alphabeticLetter}>P</button>
                <button className={styles.alphabeticLetter}>Q</button>
                <button className={styles.alphabeticLetter}>R</button>
            </div>
            <div className={styles.alphabeticRow}>
                <button className={styles.alphabeticLetter}>S</button>
                <button className={styles.alphabeticLetter}>T</button>
                <button className={styles.alphabeticLetter}>U</button>
                <button className={styles.alphabeticLetter}>V</button>
                <button className={styles.alphabeticLetter}>W</button>
                <button className={styles.alphabeticLetter}>X</button>
            </div>
            <div className={styles.alphabeticRow}>
                <button className={styles.alphabeticLetter}>Y</button>
                <button className={styles.alphabeticLetter}>Z</button>
            </div>
        </div>
    );
};

export default Alphabetic;