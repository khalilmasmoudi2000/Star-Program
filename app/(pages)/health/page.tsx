import React from 'react';
import { Navbar, Label, Footer } from '@/components';
import { Tips } from '@/containers';

const Health = () => {
    return (
        <div>
            <Navbar />
            <Label title="Health Care Tips" subtitle="Empowering Young Minds, Shaping Tomorrow's Leaders" />
            <Tips />
            <Footer />
        </div>
    );
};

export default Health;
