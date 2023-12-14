import React from 'react';
import Image from 'next/image';
import { Navbar, Label, Video, Title, Footer } from '@/components';
import Creative from '@/public/Creative.png';

type Course = {
    id: number;
    title: string;
    url: string;
};

const courses: Course[] = [
    {
        id: 1,
        title: 'Let us discover together the violin',
        url: 'https://www.youtube.com/embed/LleZdY--3zc?si=zo4BulWz5S2GKiyY',
    },
];

const Arts = () => {
    return (
        <div>
            <Navbar />
            <Label title="Artistic Expressions" subtitle="Unveiling the Beauty of Creativity" />
            <div className="flex flex-row justify-center">
                <Image src={Creative} alt="Creative" className="z-50" width={540} height={540} />
            </div>
            <Title title="Music Videos" />
            <Video course={courses[0]} />
            <Footer />
        </div>
    );
};

export default Arts;
