import React from 'react';
import Image from 'next/image';
import { Navbar, Label, Title, Video, Footer } from '@/components';
import { Tips } from '@/containers';
import Lifestyle from '@/public/Lifestyle.png';

type Course = {
    id: number;
    title: string;
    url: string;
};

const courses: Course[] = [
    {
        id: 1,
        title: 'Learn to stay focused with a healthy mind',
        url: 'https://www.youtube.com/embed/sIzGGxG5tAQ?si=H6_77rM3Bp7g4Cvt',
    },
];

const Health = () => {
    return (
        <div>
            <Navbar />
            <Label title="Wellness Wisdom" subtitle="Nourish Your Body, Elevate Your Well-being" />
            <div className="flex flex-row justify-center">
                <Image src={Lifestyle} alt="Lifestyle" className="z-50" width={540} height={540} />
            </div>
            <Title title="Healthcare Tips" />
            <Tips />
            <Title title="Healthcare Videos" />
            <Video course={courses[0]} />
            <Footer />
        </div>
    );
};

export default Health;
