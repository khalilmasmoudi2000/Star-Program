import React from 'react';
import { Navbar, Label, Footer } from '@/components';
import { Grades } from '@/containers';

const Courses = () => {
    return (
        <div>
            <Navbar />
            <Label title="Diverse Online Courses" subtitle="Empowering Minds, Cultivating Futures" />
            <Grades />
            <Footer />
        </div>
    );
};

export default Courses;
