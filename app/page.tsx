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
          <Title title="Virtual Magazines" />
          <div className="flex flex-row justify-center">
              <embed className="w-[400px] h-[460px] rounded-[16px] border-[1px] border-dark-pink shadow-grade-shadow z-50" src="ipfs://QmYfU7DvXGJmnwHUfAJbHJVivRcuH6gMRqKBDofftMBbSa/Wie%20Magazine.pdf" />
          </div>
          <Title title="AI Chatbot" />
          <div className="h-[400px]" />
      </div>
  )
}
