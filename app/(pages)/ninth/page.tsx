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
        title: 'Algebra Chapter 3',
        url: 'https://drive.google.com/file/d/1DVpuMKyTeSnJOCViCBwfbOYBAiKYz9ix/view?usp=sharing',
    },
    {
        id: 2,
        subject: 'Math',
        type: 'Document',
        title: 'Geometry Chapter 1',
        url: 'https://drive.google.com/file/d/1spBTWpD-CkBW1-MuBe3zsZjbvK7RdF37/view?usp=sharing',
    },
    {
        id: 3,
        subject: 'Math',
        type: 'Document',
        title: 'Geometry Chapter 2',
        url: 'https://drive.google.com/file/d/1aSgj28nD9RqgaoR_BeuMK2odQA7nMDEq/view?usp=drive_link',
    },
    {
        id: 4,
        subject: 'Physics',
        type: 'Document',
        title: 'Chapter 2 Part 1',
        url: 'https://drive.google.com/file/d/1FwVgmj8m5Jm_r_d8BJWtrV92TZlNxhCd/view?usp=drive_link',
    },
    {
        id: 5,
        subject: 'Physics',
        type: 'Document',
        title: 'Chapter 2 Part 2',
        url: 'https://drive.google.com/file/d/1FyIFVEWsXngm5reNRGTc5fVmb4XSTu2K/view?usp=drive_link',
    },
    {
        id: 6,
        subject: 'Science',
        type: 'Document',
        title: 'Resume Chapter 1',
        url: 'https://drive.google.com/file/d/1FFRw_zEO5aZjXnl671Yw3Tis3TCWEv2H/view?usp=drive_link',
    },
    {
        id: 7,
        subject: 'Science',
        type: 'Document',
        title: 'Test Chapter 2',
        url: 'https://drive.google.com/file/d/1F8oQaIOjPUUK2S5zZGeUmkE9ztzikzIz/view?usp=drive_link',
    },
    {
        id: 8,
        subject: 'Science',
        type: 'Document',
        title: 'Resume Chapter 3',
        url: 'https://drive.google.com/file/d/1FDZYxdHa31DDAVP7ewnOhohkAHJDBMqf/view?usp=drive_link',
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
