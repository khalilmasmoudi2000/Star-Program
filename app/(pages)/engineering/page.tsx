import React from 'react';
import Image from 'next/image';
import { Navbar, Label, Document, Title, Footer } from '@/components';
import EngHeader from '@/public/EngHeader.png';

type Course = {
    id: number;
    title: string;
    url: string;
};

const courses: Course[] = [
    {
        id: 1,
        title: 'Chapter 1 : Intro to Java',
        url: "ipfs://QmYNkBSLTkGvhNfTyY75AkPhPu63xByif5kiKixrAETyXW/Chapitre%201%20Intorduction%20to%20Java.pdf",
    },
    {
        id: 2,
        title: 'Chapter 2 : OOP in Java',
        url: 'ipfs://QmeWY6f418K8g9m73DoNFfXTQXJDqeLNT111phvWLv5yMa/Chapitre%202%20POO.pdf',
    },
    {
        id: 3,
        title: 'Chapter 3 : Java Syntax',
        url: 'ipfs://QmTDJLpXLE5haCi2Dyyb4GEp1KZaxaeC7AhWeA22d9Ph7F/Chapitre%203%20Syntaxe.pdf',
    },
    {
        id: 4,
        title: 'Chapter 4 : Java Inheritance',
        url: 'ipfs://QmPCfco5Wo3yPwG5ed1aux8AJUPBGyHjSRstQWdqRFX91T/Chapitre%204%20Heritage.pdf',
    },
];

const Engineering = () => {
    return (
        <div>
            <Navbar />
            <Label title="Advanced Engineering Courses" subtitle="Elevate Your Expertise, Engineer Your Success" />
            <div className="flex flex-row justify-center">
                <Image src={EngHeader} alt="Header" className="z-50" width={540} height={540} />
            </div>
            <Title title="Java Courses" />
            <div className="flex flex-row justify-center gap-4 py-4 z-50">
                <Document course={courses[0]} />
                <Document course={courses[1]} />
                <Document course={courses[2]} />
                <Document course={courses[3]} />
            </div>
            <Footer />
        </div>
    );
};

export default Engineering;
