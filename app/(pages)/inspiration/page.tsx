import React from 'react';
import { Navbar, Label, Footer } from '@/components';
import { Portal } from '@/containers';

const Inspiration = () => {
    return (
        <div>
            <Navbar />
            <Label title="Dynamic Inspiration Journey" subtitle="Empowering Young Minds, Shaping Tomorrow's Leaders" />
            <Portal />
            <Footer />
        </div>
    );
};

export default Inspiration;
