import React from 'react';
import styles from '@/app/index';
import { Service } from '../components';
import { SlGraduation } from "react-icons/sl";
import { GoTrophy } from "react-icons/go";
import { SlGameController } from "react-icons/sl";
import { TbMessageChatbot } from "react-icons/tb";
import { IoBookOutline } from "react-icons/io5";

const Services = () => {
    return (
        <div className={styles.servicesContainer}>
            <div className={styles.servicesFirstRow}>
                <Service icon={SlGraduation} title="Education" description="Explore a variety of multi-year courses offering a well-rounded learning journey and providing an enjoyable education." />
                <Service icon={GoTrophy} title="Success Story" description="Embark on a captivating journey where many success stories unfold, showcasing the power of resilience and determination." />
                <Service icon={SlGameController} title="Metaverse Game" description="Explore our dynamic metaverse, a space where social interaction redefine the gaming experience through communication." />
            </div>
            <div className={styles.servicesSecondRow}>
                <Service icon={TbMessageChatbot} title="AI Chatbot" description="Enhance your studying journey and get instant answers to any of your questions with our AI chatbot, your ultimate study companion." />
                <Service icon={IoBookOutline} title="Virtual Magazine" description="Dive in a world where inspiration and entertainment blend and where every page promises an escape into a realm with endless possibilities." />
            </div>
        </div>
    );
};

export default Services;
