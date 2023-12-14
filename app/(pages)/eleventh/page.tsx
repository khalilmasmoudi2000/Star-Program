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
        title: 'Chapter 1 Real Numbers',
        url: 'ipfs://QmTCFFFQNgfAbqiQpZofXYTvd1Zz1DWKpungE2mvbmA1rR/Chapter%201%20Real%20Numbers.pdf',
    },
    {
        id: 2,
        subject: 'Math',
        type: 'Document',
        title: 'Chapter 2 Equations',
        url: 'ipfs://QmbkPaQVZZ4Mp7cy9KTjZHiyqSoNEfdwg7rrQh8FEUQ8SZ/Chapter%202%202nd%20Degree%20Equations.pdf',
    },
    {
        id: 3,
        subject: 'Math',
        type: 'Document',
        title: 'Chapter 3 Polynomials',
        url: 'ipfs://QmSkfyJ3n4NvW9yMswZz8teCpHEdfbkquYys3TNZTskjQG/Chapter%203%20Polynomials.pdf',
    },
    {
        id: 4,
        subject: 'Physics',
        type: 'Document',
        title: 'Chapter 1 Electrical Energy',
        url: 'ipfs://QmWu7na8UbU5EUR6j9XjaaRQgYPJpzALsLNMfoBBhxn2he/Chapter%201%20Electrical%20Energy.pdf',
    },
    {
        id: 5,
        subject: 'Physics',
        type: 'Document',
        title: 'Chapter 2 Electrical Dipoles',
        url: 'ipfs://QmdWtDDprPSjEFQ55Kfvceq1riBxF6cpHFQXAwiQzPAuXP/Chapter%202%20Electrical%20Dipoles.pdf',
    },
    {
        id: 6,
        subject: 'Physics',
        type: 'Document',
        title: 'Chapter 3 Receivers',
        url: 'ipfs://QmbZ7ohMzNgiy1JHWRRrN4b6n23bLMuGJfbUfzYzYrN95n/Chapter%203%20Receivers.pdf',
    },
    {
        id: 7,
        subject: 'Chemistry',
        type: 'Document',
        title: 'Chapter Atom Structure',
        url: 'ipfs://QmVK6ajmfFvoskJBUeyAxS5to8X5gL1Uu2nhgmMCVkuJe2/Chapter%20Atom%20Structure.pdf',
    },
    {
        id: 8,
        subject: 'Chemistry',
        type: 'Document',
        title: 'Chapter Periodic Table',
        url: 'ipfs://QmNTC2CzvF4dRspS1beZ5rt6F7tAm9NT3gMdZT1tP4L4Vh/Chapter%20Periodic%20Table.pdf',
    },
    {
        id: 9,
        subject: 'Science',
        type: 'Document',
        title: 'Chapter 1 Topology',
        url: 'ipfs://QmcaU2dYaA9kTBXmd7mzPcwYKgPBApkXntLRAGME8XBMU1/Chapter%201%20Topology.pdf',
    },
    {
        id: 10,
        subject: 'Science',
        type: 'Document',
        title: 'Chapter 2 Tectonics',
        url: 'ipfs://QmTiNotcyr6Xgc5whBiUTqwRhNoYrFUnq3D1gAtiGm6zXL/Chapter%202%20Tectonics.pdf',
    },
    {
        id: 11,
        subject: 'Science',
        type: 'Document',
        title: 'Chapter 3 Geology',
        url: 'ipfs://QmThvTYBrYmpY2kZYeHkWozTUjYBZ8CfPGoJFiRyxn1ejx/Chapter%203%20Geology.pdf',
    },
    {
        id: 12,
        subject: 'Computer Science',
        type: 'Document',
        title: 'Problem Solving',
        url: 'ipfs://QmezBq2Rs21Yg75oWNjL5FfMC4h5FWufTpcqZuhj1atdWX/Problem%20Solving.pdf',
    },
];

const Eleventh: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Label title="Dynamic Eleventh Grade Journey" subtitle="Empowering Young Minds, Shaping Tomorrow's Leaders" />
            <Collection subjects={subjects} courses={courses} />
            <Footer />
        </div>
    );
};

export default Eleventh;
