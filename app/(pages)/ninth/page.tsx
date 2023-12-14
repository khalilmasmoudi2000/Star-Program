import React from 'react';
import { Navbar, Label, Footer } from '@/components';
import { Collection } from '@/containers';
import { BiMath } from "react-icons/bi";
import { GiAtom, GiDna2, GiLightningArc } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";

type Subject = {
    id: number;
    name: string;
    icon: JSX.Element;
};

type Course = {
    id: number;
    subject: string;
    type: string;
    title: string;
    url: string;
};

const subjects: Subject[] = [
    {
        id: 1,
        name: 'Math',
        icon: <BiMath />,
    },
    {
        id: 2,
        name: 'Physics',
        icon: <GiLightningArc />,
    },
    {
        id: 3,
        name: 'Chemistry',
        icon: <GiAtom />,
    },
    {
        id: 4,
        name: 'Science',
        icon: <GiDna2 />,
    },
    {
        id: 5,
        name: 'Computer Science',
        icon: <FaLaptopCode />,
    },
];

const courses: Course[] = [
    {
        id: 1,
        subject: 'Math',
        type: 'Document',
        title: 'Algebra Real Numbers',
        url: 'ipfs://QmVsQSWiZh3RxSM1xbDtoeF1G4xjwvr1ELuLAZXKXBEtYS/Algebra%20Real%20Numbers.pdf',
    },
    {
        id: 2,
        subject: 'Math',
        type: 'Document',
        title: 'Geometry Thales Theory',
        url: 'ipfs://QmQNU4FRXnqcK6MzdKyvxupcvwkgg9kBgDUX7HaProfGRH/Geometry%20Thales%20Theory.pdf',
    },
    {
        id: 3,
        subject: 'Math',
        type: 'Document',
        title: 'Geometry Resume',
        url: 'ipfs://QmZuPmYtnHu3KmbiCbMp5PhLzhR4TuWQmutfMneXymdi9f/Geometry%20Resume.pdf',
    },
    {
        id: 4,
        subject: 'Physics',
        type: 'Document',
        title: 'Resume Electric Circuits 1',
        url: 'ipfs://QmPsNwWXWsMxsun8ZcineTsCzLBvt6NnjuKipvgwusAnUL/Resume%20Electric%20Circuits%201.jpg',
    },
    {
        id: 5,
        subject: 'Physics',
        type: 'Document',
        title: 'Resume Electric Circuits 2',
        url: 'ipfs://QmRHVkDYsrEoo7pBbvaBgsYtwQQ6PrgJioWRkmeKRMQyV3/Resume%20Electric%20Circuits%202.jpg',
    },
    {
        id: 6,
        subject: 'Science',
        type: 'Document',
        title: 'Resume Chapter 1',
        url: 'ipfs://QmSnUY7gtR5ZmodkA8panWhCwzYVfYQjZMyBL3LPhtobLe/Resume%20Chapter%201.pdf',
    },
    {
        id: 7,
        subject: 'Science',
        type: 'Document',
        title: 'Chapter 1 Exercices',
        url: 'ipfs://QmWsy1jrb8f3VrftTCVH8J3yEsh89wEGvcQYQ6xX8ncVK6/Resume%20Chapter%202.pdf',
    },
    {
        id: 8,
        subject: 'Science',
        type: 'Document',
        title: 'Resume Chapter 2',
        url: 'ipfs://QmP3YsFJ5oZhMnGzZLfsJdGaALUDYW1CRH3AbfahPRGirE/Chapter%201%20Exercices.pdf',
    },
];

const Ninth: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Label title="Dynamic Ninth Grade Journey" subtitle="Empowering Young Minds, Shaping Tomorrow's Leaders" />
            <Collection subjects={subjects} courses={courses} />
            <Footer />
        </div>
    );
};

export default Ninth;
