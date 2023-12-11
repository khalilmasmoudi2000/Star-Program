import React from 'react';
import { Navbar, Label, Video, Footer } from '@/components';

type Course = {
    id: number;
    title: string;
    url: string;
};

const courses: Course[] = [
    {
        id: 1,
        title: '5 Women Entrepreneurs Share Their Secrets To Success',
        url: 'https://www.youtube.com/embed/JzHLIXbqlOU?si=Mg-u4_m5koKv8J_1',
    },
    {
        id: 2,
        title: 'BUSINESS MODEL CANVAS : EXEMPLE EN FRANÇAIS (BMC)',
        url: 'https://www.youtube.com/embed/JNpz47Ezr78?si=uSE43pa4mmSrzhOq',
    },
    {
        id: 3,
        title: 'Business Thinking',
        url: 'https://www.youtube.com/embed/_zfg8J39Dso?si=5593NTMS7HixoXrj',
    },
    {
        id: 4,
        title: '9 Steps to Creating a Successful Business Model',
        url: 'https://www.youtube.com/embed/IP0cUBWTgpY?si=cH3hoeKDbJhyVT0p',
    },
];

const Entrepreneurship = () => {
    return (
        <div>
            <Navbar />
            <Label title="Lead the Future" subtitle="Empowering Young Minds, Shaping Tomorrow's Leaders" />
            <Video course={courses[0]} />
            <Video course={courses[1]} />
            <Video course={courses[2]} />
            <Video course={courses[3]} />
            <Footer />
        </div>
    );
};

export default Entrepreneurship;
