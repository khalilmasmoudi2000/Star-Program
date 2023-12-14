import React from 'react';
import styles from '@/app/index';
import Image, { StaticImageData } from 'next/image';

type StoryProps = {
    image: StaticImageData;
    title: string;
    description: string;
};

const Story: React.FC<StoryProps> = ({ image, title, description}) => {
    return (
        <div className={styles.storyContainer}>
            <Image src={image} alt="Story" className={styles.storyImage} height={300} width={300} />
            <div className={styles.storyContent}>
                <div className={styles.storyTitle}>
                    {title}
                </div>
                <div className={styles.storyDescription}>
                    {description}
                </div>
                <div className={styles.storyLine} />
                <div className={styles.storyTypes}>
                    <div className={styles.storyButton}>
                        Agriculture
                    </div>
                    <div className={styles.storyButton}>
                        Business
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;
