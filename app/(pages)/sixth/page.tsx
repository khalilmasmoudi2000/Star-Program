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
        title: 'Geometry Angles',
        url: 'ipfs://QmZvkQBjih4PK4pmnY29tQrkcBjCkmyRE43mmorY4MDKDA/Geometry%20Angles.pdf',
    },
    {
        id: 2,
        subject: 'Math',
        type: 'Document',
        title: 'Geometry Parallelism',
        url: 'ipfs://QmT5drPMr792rZcHxE3Jdj8CKYcrU9Rxo3GXvNs3r4qFjy/Geometry%20Parallelism%20%26%20Orthogonality.pdf',
    },
    {
        id: 3,
        subject: 'Math',
        type: 'Document',
        title: 'Exam',
        url: 'ipfs://QmXDGygToxbkyjm3HUuHiXtVZWiYxTHUD1yGgaGkzAhnd8/Exam.pdf',
    },
    {
        id: 4,
        subject: 'Physics',
        type: 'Document',
        title: 'Chapter The light',
        url: 'ipfs://QmS7DwVV3RsgRUkLcm6eweg41nnu6SZtQdBXGDHYfbBc7t/Chapter%20The%20light.pdf',
    },
    {
        id: 5,
        subject: 'Chemistry',
        type: 'Document',
        title: 'Chapter The Air Part 1',
        url: 'ipfs://QmS1ZMRsGCyy7SuNj4FxrEu7ahir6rBdjrUXmNJxjGMpV9/Chapter%20The%20Air%20Part%201.pdf',
    },
    {
        id: 6,
        subject: 'Chemistry',
        type: 'Document',
        title: 'Chapter The Air Part 2',
        url: 'ipfs://QmTn3GRgRErwwXoGMcqRBPbNF7z2GYpPd1qAN6oqfQqGtt/Chapter%20The%20Air%20Part%202.pdf',
    },
    {
        id: 7,
        subject: 'Science',
        type: 'Document',
        title: 'Chapter The Eye',
        url: 'ipfs://QmZUHebf3s1EPkKdd3ipHcV1aAfu99zW22r9SwrxniXoPP/Chapter%20The%20Eye.pdf',
    },
    {
        id: 8,
        subject: 'Science',
        type: 'Document',
        title: 'Chapter Nutrition',
        url: 'ipfs://QmbdUef7DoNfLyWvRYmhR5EPQahsvGkwYx9YGxPTtSEr9k/Chapter%20Nutrition.pdf',
    },
    {
        id: 9,
        subject: 'Science',
        type: 'Document',
        title: 'Chapter Blood Circuit',
        url: 'ipfs://QmX3mty7JnPNWQACbb1H3w5er82oGt2j3xNSFf5uoTFrj8/Chapter%20Blood%20Circuit.pdf',
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
