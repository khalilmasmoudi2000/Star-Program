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
        title: 'Mathematics',
        url: 'https://drive.google.com/file/d/1DVpuMKyTeSnJOCViCBwfbOYBAiKYz9ix/view?usp=drive_link',
    },
    {
        id: 2,
        subject: 'Math',
        type: 'Document',
        title: 'Mathematics 2',
        url: 'https://drive.google.com/file/d/1DVpuMKyTeSnJOCViCBwfbOYBAiKYz9ix/view?usp=drive_link',
    },
    {
        id: 3,
        subject: 'Math',
        type: 'Document',
        title: 'Mathematics 2',
        url: 'https://drive.google.com/file/d/1DVpuMKyTeSnJOCViCBwfbOYBAiKYz9ix/view?usp=drive_link',
    },
    {
        id: 4,
        subject: 'Math',
        type: 'Document',
        title: 'Mathematics 2',
        url: 'https://drive.google.com/file/d/1DVpuMKyTeSnJOCViCBwfbOYBAiKYz9ix/view?usp=drive_link',
    },
    {
        id: 5,
        subject: 'Math',
        type: 'Document',
        title: 'Mathematics 2',
        url: 'https://drive.google.com/file/d/1DVpuMKyTeSnJOCViCBwfbOYBAiKYz9ix/view?usp=drive_link',
    },
    {
        id: 6,
        subject: 'Math',
        type: 'Document',
        title: 'Mathematics 2',
        url: 'https://drive.google.com/file/d/1DVpuMKyTeSnJOCViCBwfbOYBAiKYz9ix/view?usp=drive_link',
    },
    {
        id: 7,
        subject: 'Math',
        type: 'Document',
        title: 'Mathematics 2',
        url: 'https://drive.google.com/file/d/1DVpuMKyTeSnJOCViCBwfbOYBAiKYz9ix/view?usp=drive_link',
    },
];

const Sixth: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Label title="Dynamic Sixth Grade Journey" subtitle="Empowering Young Minds, Shaping Tomorrow's Leaders" />
            <Collection subjects={subjects} courses={courses} />
            <Footer />
        </div>
    );
};

export default Sixth;
