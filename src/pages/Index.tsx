
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MemorialCards from '@/components/MemorialCards';
import MemoryTimeline from '@/components/MemoryTimeline';
import MessagesSection from '@/components/MessagesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <MemorialCards />
      <MemoryTimeline />
      <MessagesSection />
      <Footer />
    </div>
  );
};

export default Index;
