import React from 'react';
import Image from 'next/image';
import { Navbar, Label, Title, Video, Footer } from '@/components';
import { Stories } from '@/containers';
import Trophy from '@/public/trophy.png';

type Course = {
    id: number;
    title: string;
    url: string;
};

const courses: Course[] = [
    {
        id: 1,
        title: "Gender equality is power, Power is Tunisian women",
        url: 'https://www.youtube.com/embed/3sbMus9t3fQ?si=7lvcvv5GKR97sQu8',
    },
    {
        id: 2,
        title: 'Mothers are the best partners',
        url: 'https://www.youtube.com/embed/SBzUErQlI3c?si=2gxHB701vQnVMMMH',
    },
];

const Success = () => {
    return (
        <div>
            <Navbar />
            <Label title="Inspire to Aspire" subtitle="Celebrating Journeys, Amplifying Achievements" />
            <div className="flex flex-row justify-center">
                <Image src={Trophy} alt="" className="z-50" width={540} height={540} />
            </div>
            <Title title="Women United" />
            <div className="flex flex-row justify-center gap-8">
                <Video course={courses[0]} />
                <Video course={courses[1]} />
            </div>
            <Title title="Success Stories" />
            <Stories />
            <Footer />
        </div>
    );
};

export default Success;
