import React from 'react';
import { Navbar, Title, Footer } from '../components';
import { Header, Services } from '../containers';

export default function Home() {
  return (
      <div className="bg-primary-white overflow-x-hidden h-screen w-screen">
          <Navbar />
          <Header />
          <Title title="Our Services" />
          <Services />
          <Footer />
      </div>
  )
}
