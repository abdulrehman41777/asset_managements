import MainAssetsCards from '@/components/main-assets-cards';
import OverviewSection from '@/components/overview-section';
import React from 'react';

const MainContent = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <MainAssetsCards />
      <div className="">
        <OverviewSection />
      </div>
    </div>
  );
};

export default MainContent;
