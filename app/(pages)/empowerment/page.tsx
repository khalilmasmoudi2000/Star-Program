import React from 'react';
import { Navbar, Label, Footer } from '@/components';
import { Nexus } from '@/containers';

const Empowerment = () => {
    return (
        <div>
            <Navbar />
            <Label title="The Path to a Brighter Future" subtitle="Building Entrepreneurs, Engineering Innovators, and Eradicating Illiteracy" />
            <Nexus />
            <Footer />
        </div>
    );
};

export default Empowerment;
