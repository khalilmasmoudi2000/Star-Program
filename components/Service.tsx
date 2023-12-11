import React from 'react';
import styles from '@/app/index';
import { IconType } from 'react-icons';

interface ServiceProps {
    icon: IconType;
    title: string;
    description: string;
}

const Service: React.FC<ServiceProps> = ({ icon: Icon, title, description }) => {
    return (
        <div className={styles.serviceContainer}>
            <div className={styles.serviceIcon}>
                <Icon size={30} />
            </div>
            <div className={styles.serviceContent}>
                <div className={styles.serviceTitle}>
                    {title}
                </div>
                <div className={styles.serviceDescription}>
                    {description}
                </div>
            </div>
        </div>
    );
};

export default Service;
