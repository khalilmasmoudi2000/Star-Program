import React from 'react';
import Image from 'next/image';
import { Navbar, Label, Title, Video, Footer } from '@/components';
import Career from '@/public/Career.png';

type Course = {
    id: number;
    title: string;
    url: string;
};

const courses: Course[] = [
    {
        id: 1,
        title: "It's time to go beyond cultural restrictions",
        url: 'https://www.youtube.com/embed/iaUcmSKF4xA?si=pPhY70GDRVxoOoxE',
    },
    {
        id: 2,
        title: 'Work and prove yourself',
        url: 'https://www.youtube.com/embed/bvGxVitKp2s?si=RayhE0ofBvHaZA4v',
    },
    {
        id: 3,
        title: '5 Women Entrepreneurs Share Their Secrets To Success',
        url: 'https://www.youtube.com/embed/JzHLIXbqlOU?si=Mg-u4_m5koKv8J_1',
    },
    {
        id: 4,
        title: 'BUSINESS MODEL CANVAS : EXEMPLE EN FRANÇAIS (BMC)',
        url: 'https://www.youtube.com/embed/JNpz47Ezr78?si=uSE43pa4mmSrzhOq',
    },
    {
        id: 5,
        title: 'Business Thinking',
        url: 'https://www.youtube.com/embed/_zfg8J39Dso?si=5593NTMS7HixoXrj',
    },
    {
        id: 6,
        title: '9 Steps to Creating a Successful Business Model',
        url: 'https://www.youtube.com/embed/IP0cUBWTgpY?si=cH3hoeKDbJhyVT0p',
    },
];

const Entrepreneurship = () => {
    return (
        <div>
            <Navbar />
            <Label title="Unlocking Business Brilliance" subtitle="Ignite Your Entrepreneurial Spirit, Shape Your Future" />
            <div className="flex flex-row justify-center">
                <Image src={Career} alt="trophy" className="z-50" width={540} height={540} />
            </div>
            <Title title="It's Time to Succeed" />
            <div className="flex flex-row justify-center py-8 gap-8">
                <Video course={courses[0]} />
                <Video course={courses[1]} />
            </div>
            <Title title="Entrepreneurship Courses" />
            <div className="flex flex-col py-8 gap-12">
                <div className="flex flex-row justify-center gap-8">
                    <Video course={courses[2]} />
                    <Video course={courses[3]} />
                </div>
                <div className="flex flex-row justify-center gap-8">
                    <Video course={courses[4]} />
                    <Video course={courses[5]} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Entrepreneurship;
