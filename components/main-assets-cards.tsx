import React from 'react';
import AssetCard from '../components/Assetcard';

const MainAssetsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <AssetCard 
        title="Total Assets"
        value={983}
        percentage="100%"
        iconSrc="/images/a1_icons.png"
        borderColor="border-green-700"
        bgColor="bg-green-600"
      />
      <AssetCard 
        title="Tickets Raised"
        value={245}
        percentage="80%"
        iconSrc="/images/a2_icons.png"
        borderColor="border-blue-900"
        bgColor="bg-blue-600"
      />
      <AssetCard 
        title="Total Employees"
        value={120}
        percentage="95%"
        iconSrc="/images/a3_icons.png"
        borderColor="border-orange-700"
        bgColor="bg-orange-500"
      />
    </div>
  );
};

export default MainAssetsCards;
